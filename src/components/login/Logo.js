import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Img from '../../../assets/logo-hiffel.svg'

export default class logo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <Img style={styles.image}
           height="100%" 
           preserveAspectRatio="xMinYMin slice" 
           width="100%" 
           viewBox="0 0 700 700"/>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "40px",
    height: "40px",
  },
});

