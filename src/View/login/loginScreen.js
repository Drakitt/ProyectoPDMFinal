import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import ButtonLogin from '../../components/login/button';
import TextInputLogin from '../../components/login/textInput';
import EmailTextField from '../../components/login/emailTextField';
import Utils from '../../utils/utils';
import LogoLogin from '../../components/login/logo';
import DismissKeyboard from '../../components/login/dismissKeyboard';
import Constants from '../../config/constants';
import Colors from '../../config/colors';
import Imagen from '../../config/images';
import Fire from '../../plugins/firebase/firebase';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
// validaciones
import firebase from "../../firebase/firebase";
import useValidacion from "../../hooks/useValidacion";
import validarIniciarSesion from "../../validacion/validarIniciarSesion";
import { useFormik } from "formik";

const STATE_INICIAL = {
  email: "",
  password: "",
};
const validate = values =>{
  const errors = {};

    // validar el email
    if(!values.email) {
        errors.email = "El Email es Obligatorio";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        errors.email = "Email no válido"
    }

    // validar el password
    if(!values.password) {
        errors.password = "El password es obligatorio";
    } else if( values.password.length < 6 ) {
        errors.password = 'El password debe ser de al menos 6 caracteres'
    }

    return errors;
}
const LoginScreen = ({navigation}) => {
  const [error, guardarError] = useState(false);
  const formik = useFormik({
    initialValues:{
      email: "",
      password: "",
    },
    validate,
    onSubmit:()=>{iniciarSesion()}
  })
  async function iniciarSesion() {
    try {
      await firebase.login(formik.values.email, formik.values.password);
      Alert.alert("usuario logeado");
      navigation.navigate('Register');

    } catch (error) {
      console.error("Hubo un error al autenticar el usuario ", error.message);
      Alert.alert(error.message);
    }
  }
  
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        style={stylesLoginScreen.container}
        behavior="height"
        enabled>
        <View style={stylesLoginScreen.container}>
          <SafeAreaView>
            <LogoLogin style={stylesLoginScreen.logo}  />
            <View style={stylesLoginScreen.form}>
              <Input
                id="email"
                name="email"
                placeholder={Constants.STRING.EMAIL}
                errorStyle={{color: 'red'}}
                inputContainerStyle={stylesLoginScreen.textFieldView}
                inputStyle={stylesLoginScreen.textField}
                labelStyle={stylesLoginScreen.textField}
                leftIconContainerStyle={stylesLoginScreen.inlineImg}
                leftIcon={
                  <Icon
                    name="user"
                    size={22}
                    color={Colors.dark}
                  />
                }
                onEndEditing={formik.handleBlur('email')}
                onChangeText={formik.handleChange('email')}
                value={formik.values.email}
                errorMessage={formik.errors.email}
                secureTextEntry={false}
                autoCorrect={false}
              />
              
              <Input
                id="password"
                name="password"
                placeholder={Constants.STRING.PASSWORD}
                errorStyle={{color: 'red'}}
                inputContainerStyle={stylesLoginScreen.textFieldView}
                inputStyle={stylesLoginScreen.textField}
                labelStyle={stylesLoginScreen.textField}
                leftIconContainerStyle={stylesLoginScreen.inlineImg}
                leftIcon={
                  <Icon
                    name="lock"
                    size={22}
                    color={Colors.dark}
                  />
                }
                onEndEditing={formik.handleBlur('password')}
                onChangeText={formik.handleChange('password')}
                value={formik.values.password}
                errorMessage={formik.errors.password}
                secureTextEntry={true}
                autoCorrect={false}
              />
              <ButtonLogin
                onPress={formik.handleSubmit}
                titleButton={Constants.STRING.TITLE_BUTTON}
              />
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    alignItems: 'center',
  },
  logo: {
    flex: 1, 
    width: '100%', 
    resizeMode: 'contain', 
    alignSelf: 'center'},
  form: {
    flex: 1, 
    justifyContent: 'center', 
    width: '80%'},
  textFieldView: {
    height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.8,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 10,
    borderColor: Colors.white,
    borderWidth: 2,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  textField: {
    fontSize: 14,
    flex: 1,
    paddingLeft:20,
    color:Colors.dark,
    marginHorizontal: 20,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 10,
    top: 9,
  },
});
export default LoginScreen;
