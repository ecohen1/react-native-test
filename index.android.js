/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AwesomeProject extends Component {
  constructor(props) {
    super(props)
    console.log("hi")
    this.state = {
        fetchResult: "No data yet!"
    }
    this.sendRequest = this.sendRequest.bind(this)
  }

  sendRequest() {
    self = this
    fetch('http://google.com')
    .then(function(res) {
        console.log(res)
//        self.setState({fetchResult:res})
    })
    .catch(function(error){
        console.log(error)
//        self.setState({fetchResult:error})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeProjectPresentation sendRequest={this.sendRequest} fetchResult={this.state.fetchResult}></AwesomeProjectPresentation>
      </View>
    )
  }
}

class AwesomeProjectPresentation extends Component {
  constructor(props){
    super(props)
    console.log("HI")
  }

  render() {
    return (
        <View>
            <Text onPress={this.props.sendRequest}>Click Me!</Text>
            <Text>{this.props.fetchResult}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
