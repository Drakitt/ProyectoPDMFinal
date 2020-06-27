import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import Colors from '../config/colors';
import Constants from '../config/constants';

const CTextField = ({fieldstyles,value, autoCorrect, placeholder, error, onChange, onValidate}) => {
  return (
    <View>
      <Text style={styles.error}>{error}</Text>
      <View style={fieldstyles}>
        <TextInput
        
          styles={styles.field}
          value={value}
          autoCorrect={autoCorrect}
          placeholder={placeholder}
          onChangeText={onChange}
          onEndEditing={onValidate}
          multiline = {true}
        >
        </TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 20,
  },
  fieldView: {
    height: 40,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderColor: Colors.black2,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.fieldBackgroud,
  },
  error: {
    fontSize: 12,
    color: Colors.red,
    marginBottom: -5,
    marginHorizontal: 20,
  },
});

export default CTextField;
