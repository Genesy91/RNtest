import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Linking
} from 'react-native';

export default class Testcomponent1 extends Component {
    state = {
        balubone: 1
    }
    
    render(){
        return <Text> gino {this.state.balubone} </Text>;
    }
};

