import React from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import Constants from '../config/constants';
import Colors from '../config/colors';

function emailTextField({
  value,
  placeHolder,
  error,
  onChange,
  onValidate,
  onEndEditing,
  autoCorrect,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
      <View style={styles.field}>
        <TextInput
          style={styles.fieldView}
          value={value}
          autoCorrect={autoCorrect}
          placeHolder={placeHolder}
          onChangeText={onChange}
          onEndEditing={onEndEditing}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 12,
    color: Colors.red,
    marginBottom: -5,
    marginHorizontal: 20,
  },
  field: {
    fontSize: 14,
    flex: 1,
    paddingLeft: 20,
    marginHorizontal: 20,
    color: Colors.dark,
  },
  fieldView: {
    height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderColor: Colors.black2,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.fieldBackgroud,
  },
});

export default emailTextField;
