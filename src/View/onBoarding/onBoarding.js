import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import Img1 from '../../../assets/Phone-Black.svg';
import Img2 from '../../../assets/Phone-Black.svg';
import Img3 from '../../../assets/web-responsive.svg';
import Constants from '../../config/constants';

const data = [
  {
    title: 'DISEÑOS MODERNOS',
    text: 'Estamos a la vanguardia de tecnologías actuales',
    image: <Img1  width={Constants.CONFIG.SCREEN_WIDTH * 0.90} height={Constants.CONFIG.HEADER_HEIGHT * 0.5}/>,
    bg: '#ffff',
  },
  {
    title: 'MARKETING DIGITAL',
    text: 'Concientes de la importancia de las redes sociales',
    image: <Img2  width={Constants.CONFIG.SCREEN_WIDTH * 0.90} height={Constants.CONFIG.HEADER_HEIGHT * 0.5}/>,
    bg: '#fff',
  },
  {
    title: '100% RESPONSIVE',
    text: "Desarrollamos paginas web que se adaptan",
    image: <Img3  width={Constants.CONFIG.SCREEN_WIDTH * 0.90} height={Constants.CONFIG.HEADER_HEIGHT * 0.5}/>,
    bg: '#fff',
  },
];



const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    color: '#000000',
    textAlign: 'center',
  },
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const onBoarding=({navigation})=> {
  _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        {item.image}
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };


    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={_keyExtractor}
          renderDoneButton={_renderDoneButton}
          renderNextButton={_renderNextButton}
          renderItem={_renderItem}
          data={data}
          onDone={()=>{navigation.navigate('Login Screen');}}
        />
      </View>
    );
  
}
export default onBoarding