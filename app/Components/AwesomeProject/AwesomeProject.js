import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {Coords} from '../Coords/Coords.js';
import {Input} from '../Input/Input.js';
import {styles} from './styles.js';

export class AwesomeProject extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.AwesomeProject}>
                <Input></Input>
                <Coords></Coords>
            </View>
        )
    }
}