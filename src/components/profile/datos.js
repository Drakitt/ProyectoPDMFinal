import React,{useContext} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Colors from '../../config/colors';
import Constants from '../../config/constants';
import {FirebaseContext} from '../../firebase/index';

const datos = () => {
  const {datosUsuario, usuario} = useContext(FirebaseContext);
  const getCurrentDate=(fecha)=>{
      var date = fecha.getDate();
      var month = fecha.getMonth() + 1;
      var year =    fecha.getFullYear();
      return date + '-' + month + '-' + year;
}
  return (
    <>
      <View style={styles.container}>
        {datosUsuario ? (
          <>
            <Text style={styles.text}>
              Nombres:{' '}
              <Text style={styles.text2}>{datosUsuario.first_name}</Text>
            </Text>
            <Text style={styles.text}>
              Apellidos:{' '}
              <Text style={styles.text2}>{datosUsuario.last_name}</Text>
            </Text>
            <Text style={styles.text}>
              Fecha de nacimiento: <Text style={styles.text2}>{getCurrentDate(datosUsuario.birthdate.toDate())}</Text>
            </Text>
            <Text style={styles.text}>
              Carnet de Identidad: <Text style={styles.text2}>{datosUsuario.ci}</Text>
            </Text>
            <Text style={styles.text}>
              Gender:  <Text style={styles.text2}>{datosUsuario.gender == 'M' ? 'Masculino':'Femenino'}</Text>
            </Text>
            {console.log(datosUsuario)}
          </>
        ) : null}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Constants.CONFIG.SCREEN_WIDTH * 0.8,
    justifyContent: 'center',
    textAlign:'left',
    paddingTop: Constants.CONFIG.SCREEN_HEIGHT * 0.1,
  },
  text: {
    color: Colors.primary,
    fontSize: 20,
    paddingTop:10
  },
  text2: {
    color: Colors.black,
    fontSize: 20,
  },
});
export default datos;
