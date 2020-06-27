import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  Image,
} from 'react-native';
import Button from '../Onboarding/Button';
const ButtonsFooter = ({title1, title2,pressPrev,presNext}) => {
  return (
    <>
      <View style={styles.form}>
        <Button  titleButton={title1} onPress={pressPrev}/>
        <Button  titleButton={title2} onPress={presNext}/>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'flex-end',
    marginTop: 100,
  },
});

export default ButtonsFooter;
