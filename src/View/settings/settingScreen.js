import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, ImageBackground} from 'react-native';

import CTextField from '../../components/CTextField';
import Button from '../../components/login/Button';
import FirebasePlugin, {firestore} from '../../plugins/firebase/firebase';
import LogoLogin from '../../components/login/Logo';

import Constants from '../../config/constants';
import Utils from '../../utils/utils';
import colors from '../../config/colors';
import Images from '../../config/images';
import images from '../../config/images';

const SettingScreen = () => {
  const [consulta, setConsulta] = useState('');
  const [tipodeconsulta, setTipodeconsulta] = useState('');
  const [errorEmailName, setErrorEmailName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateCTextField = () => {
    let isValidField = Utils.isValidField(consulta);
    isValidField ?
      setErrorEmailName('') :
      setErrorEmailName('');
    return isValidField;
  };

  const onPressAdd = () => {
    let isValid = validateCTextField();
    if (isValid) {
      addEmailRowToFirebase();
    } else {
      Alert.alert(Constants.STRING.REVIEW_EMAIL);
    }
  }

  
  const addEmailRowToFirebase = () => {
    setIsLoading(true);

    const emailRef = firestore.collection('consultas').doc();
    const userID = FirebasePlugin.auth().currentUser.uid;
    const email = FirebasePlugin.auth().currentUser.email;

    emailRef.set({
      userID: userID,
      email:email,
      tipo: tipodeconsulta,
      consulta: consulta,
    })
      .then(function () {
        setIsLoading(false);
        Alert.alert('Consulta enviada:', "Gracias por contactarse con nosotros");
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={images.BACKGROUND} style={styles.image}>
      <CTextField
      fieldstyles={styles.fieldView}
        value={tipodeconsulta}
        autoCorrect={false}
        placeholder={"Ingresa el tipo de consulta"}
        error={errorEmailName}
        onChange={(newTipo) => {
          setTipodeconsulta(newTipo);
        }}
        onValidate={validateCTextField}
      />
      <CTextField
        fieldstyles={styles.fieldView2}
        value={consulta}
        autoCorrect={false}
        placeholder={"Ingrese su consulta"}
        //error={errorEmailName}
        onChange={(newConsulta) => {
          setConsulta(newConsulta);
        }}
        onValidate={validateCTextField}
      />
      <Button
        titleButton={"enviar"}
        onPress={onPressAdd}
        isLoading={isLoading}
      />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  image: {
    width:'100%',
    height:'100%'
  },
  logo: {
  
    width: '100%', 
    resizeMode: 'contain', 
    alignSelf: 'center'
  },
  fieldView: {
    height: 40,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderColor: colors.black2,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: colors.fieldBackgroud,
  },
  fieldView2: {
    height: 200,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderColor: colors.black2,
    borderWidth: 1,
    backgroundColor: colors.fieldBackgroud,
  },
    
});

export default SettingScreen;
