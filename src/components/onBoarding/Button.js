import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Colors from '../../Config/Colors';

class button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={stylesButton.container} onPress={this.props.onPress}>
          <Text style={stylesButton.text}>{this.props.titleButton}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const stylesButton = StyleSheet.create({
  container: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'transparent',
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  text: {color: Colors.white, textAlign: 'center', height: 20},
});

button.propTypes = {};

export default button;
