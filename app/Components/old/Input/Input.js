import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import {styles} from './styles.js';
import {storeText} from '../../Redux/Reducers/storeText.js'

export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameText: 'Eli',
            latText: 'lat',
            longText: 'long'
        };
        this.textToState = this.textToState.bind(this);
        storeText.subscribe(this.textToState);
    }

    textToState(){
        this.setState(storeText.getState());
    }

    dispatchTextChange(text,actionType){
        storeText.dispatch({
            text: text,
            type: actionType
        });
    }

    render() {
        return (
            <View>
                <TextInput style={styles.Name} onChangeText={(text) =>this.dispatchTextChange(text,'NAME')} value={this.state.nameText}></TextInput>
                <TextInput style={styles.Lat} onChangeText={(text)=>this.dispatchTextChange(text,'LAT')} value={this.state.latText}></TextInput>
                <TextInput style={styles.Long} onChangeText={(text)=>this.dispatchTextChange(text,'LONG')} value={this.state.longText}></TextInput>
                <Text>{this.state.nameText}</Text>
                <Text>{this.state.latText}</Text>
                <Text>{this.state.longText}</Text>
            </View>
        )
    }
}