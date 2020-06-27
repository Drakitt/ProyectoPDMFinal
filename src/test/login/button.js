import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity,Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Constants from'./constants'

class button extends Component {
    constructor(props){
        super(props);
        this._onPress=this._onPress.bind(this);
    }
    _onPress(){
        console.log('click');
        console.log(this.props.pass);
        console.log(this.props.user);
        console.log('respuesta ' + (this.props.pass+this.props.user))
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.button}
                onPress={this._onPress}>
                    <Text style={styles.text}
                    >{Constants.TITLE_BUTTON}</Text>
                </TouchableOpacity>       
            </View>
        );
    }
}
const styles = StyleSheet.create({
        container: { flex: 1, top: -95, alignItems: 'center', justifyContent: 'flex-start', }, 
        button: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#F035E0', width:'auto', 
        height: Constants.DEFAULT_MARGIN_BUTTON, borderRadius: 20, zIndex: 100, }, 
        circle: { height: Constants.DEFAULT_MARGIN_BUTTON, width: Constants.DEFAULT_MARGIN_BUTTON, marginTop: -Constants.DEFAULT_MARGIN_BUTTON, borderWidth: 1, borderColor: '#F035E0', borderRadius: 100, alignSelf: 'center', zIndex: 99, backgroundColor: '#F035E0', }, 
        text: { color: 'white', backgroundColor: 'transparent', }, image: { width: 24, height: 24, },
        body: { flex: 1, flexDirection: 'column', backgroundColor: '#1292B4', }
     });

button.propTypes = {

};

export default button;