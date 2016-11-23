import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';

import {styles} from './styles.js'
import {storeCurrCoords} from '../../Redux/Reducers/storeCurrCoords.js'
import {storeUserData} from '../../Redux/Reducers/storeUserData.js'
import config from '../../settings/config.js'

export class SendCoords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currCoords: {
                lat:0,
                lng:0
            }
        };
        storeCurrCoords.subscribe(this.currCoordsToState);
    }

    currCoordsToState = () => {
        let self = this;
        self.setState({currCoords:storeCurrCoords.getState()});
    }

    sendCoords = () => {
        fetch(config.serverUrl, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: storeUserData.getState().name,
            lat: storeCurrCoords.getState().lat,
            lng: storeCurrCoords.getState().lng
          })
        })
//        .then((res) => console.warn(res["_bodyInit"])})
        .catch(function(error){
            console.warn(error);
        });
    }

    sendOwnCoords = () => {
        let self = this;
        navigator.geolocation.getCurrentPosition(function(position){
            lat = position["coords"]["latitude"],
            lng = position["coords"]["longitude"]
            storeCurrCoords.dispatch({
                lat:lat,
                lng:lng,
                type:'UPDATE'
            });
            self.sendCoords();
        });
    }

    render() {
        return (
          <View style={styles.SendCoords}>
            <SendCoordsPresenter sendOwnCoords={this.sendOwnCoords} currCoords={this.state.currCoords}></SendCoordsPresenter>
          </View>
        )
    }
}

class SendCoordsPresenter extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Button onPress={this.props.sendOwnCoords} style={styles.Button}>Send My Coords</Button>
        )
    }
}

