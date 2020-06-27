import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Img from '../../../assets/logo.svg';
import Colors from '../../config/colors';
import Constants from '../../config/constants';
import {FirebaseContext} from '../../firebase/index';
import {Avatar} from 'react-native-paper';

const imageUser = () => {
  const {datosUsuario, usuario} = useContext(FirebaseContext);

  return (
    <>
      <View style={styles.container}>
        {usuario ? (
          <Avatar.Image
            source={{
              uri: usuario.photoURL,
            }}
            size={150}
          />
        ) : null}
        {usuario ? <Text style={styles.text}>{usuario.displayName}</Text> : null}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: Constants.CONFIG.SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Constants.CONFIG.SCREEN_HEIGHT * 0.1,
    paddingBottom:Constants.CONFIG.SCREEN_HEIGHT * 0.05,
  },
  text:{
      color:Colors.white,
      fontSize: 30,
  }
});
export default imageUser;
