import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {SendCoords} from '../SendCoords/SendCoords.js';
import {styles} from './styles.js';

export class AwesomeProject extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.AwesomeProject}>
                <SendCoords></SendCoords>
            </View>
        )
    }
}