/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//npx react-native run-android
import React, {useEffect, useState} from 'react';
import {decode, encode} from 'base-64';
import {YellowBox} from 'react-native';
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
import MainNavigator from './src/navigator/mainNavigator';
import firebase, {FirebaseContext} from './src/firebase/index';
import useAutenticacion from './src/hooks/useAutenticacion';

YellowBox.ignoreWarnings(["Setting a timer", "FlatList", "react-native"]);

const App: () => React$Node = () => {
  const [consultarDB, guardarConsultarDB] = useState(true);
  const [datosUsuario, guardarDatosUsuario] = useState({});

  const usuario = useAutenticacion();
  console.log(usuario);
 

  useEffect(() => {
    if (usuario === null) {
      guardarDatosUsuario({});
      guardarConsultarDB(true);
      return;
    }
    if (usuario && consultarDB) {
      const obtenerDatos = async () => {
        const datosQuery = await firebase.db
          .collection('Usuarios')
          .where('email', '==', usuario.email);
        const datos = await datosQuery
          .get()
          .then(dato => {
            dato.forEach(function(doc) {
              guardarDatosUsuario(doc.data());
              guardarConsultarDB(false);
            });
          })
          .catch(error => {
            console.log(error);
            guardarConsultarDB(false);
          });
      };
      obtenerDatos();
      console.log(datosUsuario);
    }
  }, [usuario]);
  return (
    <>
      <FirebaseContext.Provider
        value={{
          firebase,
          usuario,
          datosUsuario,
        }}>
        <MainNavigator />
      </FirebaseContext.Provider>
    </>
  );
};

export default App;
