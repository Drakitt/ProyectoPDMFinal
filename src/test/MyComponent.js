import React,{Component} from 'react';
import {View, Text} from 'react-native';

export default class Bananas extends Component {
    constructor(props){
        //debugger;
        console.log(props.text);
        super(props);
    }
    
    render() {
      return (
           
                    <View>
                        <Text>
                            {this.props.text}
                        </Text>
                    </View>
           
      );
    }
}