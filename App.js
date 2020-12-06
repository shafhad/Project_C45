import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { ScreenOrientation } from 'expo';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
      
        source={{ uri: 'https://editor.p5js.org/asmita777/present/8Y1zvvrQX' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
