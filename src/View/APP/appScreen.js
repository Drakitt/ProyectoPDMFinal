import React from 'react';
import {View, Text, Button, StyleSheet, Image, ImageBackground} from 'react-native';
import images from '../../config/images'
import Img from '../../../assets/logo-hiffel.svg'
import Colors from '../../config/colors';
import Constants from '../../config/constants';

const AppScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={images.BACKGROUND2} style={styles.image}>
      <Img style={styles.imagen}
      height="50%" 
      preserveAspectRatio="xMinYMin slice" 
      width="100%" 
      viewBox="0 0 700 700"/>
      <View style={styles.form}>
        <Text style={styles.text}>
        EL FUTURO DE TU EMPRESA ESTA EN LA RED
       </Text>
      </View>
      </ImageBackground>
    </View>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: Colors.dark,
    alignItems: 'center',
  },
  imagen: {
    paddingTop: Constants.CONFIG.HEADER_HEIGHT * 0.5,
    height:Constants.CONFIG.HEADER_HEIGHT * 0.2, 
    width:Constants.CONFIG.SCREEN_WIDTH * 0.8
  },
  image: {
    width:'100%',
    height:'100%'
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign:'center',
    width: Constants.CONFIG.SCREEN_WIDTH * 0.8,
    color: Colors.white,
    fontSize: 30,
  },
});
