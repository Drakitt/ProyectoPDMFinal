import React from 'react';
import {StyleSheet, View, Text,TextInput ,TouchableOpacity} from 'react-native';
import Constants from '../../config/constants';
import Colors from '../../config/colors';
import Imagen from '../../config/images';

const registerScreen = ({onChangeTextEmail,onChangeTextPassword,onPressRegister,navigation}) => {
    return (
        <View style={styles.contariner}>
            <Text>Register Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 20,
  },
});
export default registerScreen;