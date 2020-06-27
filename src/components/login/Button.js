import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import Colors from '../../config/colors';
import Constants from '../../config/constants';

const Button = ({titleButton, onPress, isLoading}) => {
  const loader = () => {
    return <ActivityIndicator animating={isLoading} />;
  };
  const button = () => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{titleButton}</Text>
      </TouchableOpacity>
    );
  };

  return <View style={styles.button}>{isLoading ? loader() : button()}</View>;
};

const styles = StyleSheet.create({
  button: {
    height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark,
    marginVertical: 12,
    borderRadius: 5,
    shadowColor: Colors.blue,
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 10},
    shadowRadius: 20,
  },
  text: {
    width: 150,
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 20,
  },
});

export default Button;
