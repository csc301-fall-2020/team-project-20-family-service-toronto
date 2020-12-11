import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View
} from 'react-native';
import { WebView } from 'react-native-webview';

const SOURCE_PROTOCOL = "https://";
const SOURCE_DOMAIN = "happy-goldwasser-7387af.netlify";
const SOURCE_EXT = ".app";
const SOURCE_PATH = "/"
const DEFAULT_URL = SOURCE_PROTOCOL + SOURCE_DOMAIN + SOURCE_EXT + SOURCE_PATH;

const App = () => {

  const [source, setSource] = useState(DEFAULT_URL);
  const [returnButtonVisibility, setVisibility] = useState(false);

  // source domain exists in url
  const handleStateChange = nav => setVisibility(nav.url.indexOf(SOURCE_DOMAIN) < 0)

  const handleReturnButton = () => setSource(`${DEFAULT_URL}?t=${Date.now()}`);


  const button = (
    <TouchableOpacity
      style={styles.returnButton}
      onPress={handleReturnButton}
    >
      <Text style={styles.returnText}>Return to Main Menu</Text>
    </TouchableOpacity> 
  );

  return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style='dark'/>
        <View style={styles.container}>
          <WebView
            style={styles.webView}
            source={{uri: source}}
            javaScriptEnabled={true}
            scalesPageToFit={true}
            statusBar={true}
            onNavigationStateChange={handleStateChange}
          /> 
        </View>
        {returnButtonVisibility ? button : <></>}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  returnButton: {
    height: 50,
    fontSize: 34,
    color: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(0,123,255,.25)'
  },
  returnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily:"sans-serif",
    fontSize: 25,
  },
  webView: {
    flex: 3,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    borderColor: 'red',
    borderRadius: 3,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
  },
});

export default App;