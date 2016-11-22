import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {styles} from './styles.js'
import {storeCurrCoords} from '../../Redux/Reducers/storeCurrCoords.js'

export class Coords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Eli",
            currCoords: {
                lat:0,
                lng:0
            },
            allCoords:[{
               lat:0,
               lng:0
           }]
        };
        this.sendCoords = this.sendCoords.bind(this);
        this.getCoords = this.getCoords.bind(this);
        this.currCoordsToState = this.currCoordsToState.bind(this);
        storeCurrCoords.subscribe(this.currCoordsToState);
    }

    currCoordsToState(){
        this.setState({currCoords:storeCurrCoords.getState()});
    }

    sendCoords() {
        self = this;
        navigator.geolocation.getCurrentPosition(function(position){
            var currGeo = {
                    lat:position["coords"]["latitude"],
                    lng:position["coords"]["longitude"]
            }

            fetch('https://morning-lowlands-18431.herokuapp.com/', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: "Eli",
                lat: currGeo.lat,
                lng: currGeo.lng
              })
            })
            .then(function(res){ return JSON.parse(res["_bodyInit"])})
            .then(function(jsonRes){
                var lat = jsonRes.lat;
                var lng = jsonRes.lng;
                storeCurrCoords.dispatch({
                    lat:lat,
                    lng:lng,
                    type:'UPDATE'
                });
//                self.setState({
//                    currCoords:{
//                        lat:lat,
//                        lng:lng
//                    }
//                });
            })
            .catch(function(error){
                console.warn(error);
            });
        });
    }

    getCoords() {
        var self = this;
        fetch('https://morning-lowlands-18431.herokuapp.com/', {
          method: 'GET'
        })
        .then(function(res){ return JSON.parse(res["_bodyInit"])})
        .then(function(jsonRes) {
            self.setState({allCoords:jsonRes});
        })
        .catch(function(error){
            console.warn(JSON.stringify(error));
        });
    }

    render() {
        return (
          <View style={styles.Coords}>
            <CoordsPresenter sendCoords={this.sendCoords} getCoords={this.getCoords} currCoords={this.state.currCoords} allCoords={this.state.allCoords}></CoordsPresenter>
          </View>
        )
    }
}

class CoordsPresenter extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <Text onPress={this.props.sendCoords}>Click Me To Send Coords</Text>
                <Text>{this.props.currCoords.lat}, {this.props.currCoords.lng}</Text>
                <Text onPress={this.props.getCoords}>Click Me To Get All Coords</Text>
                <Text>{this.props.allCoords[0].lat}, {this.props.allCoords[0].lng}</Text>
            </View>
        )
    }
}