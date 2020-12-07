import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Button,
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
  const [returnButtonVisibility, setReturnButtonVisibility] = useState(false);

  const handleStateChange = (navState) => {
    // source domain exists in url
    setReturnButtonVisibility(navState.url.indexOf(SOURCE_DOMAIN) < 0)
  }

  const handleReturnButtonPress = () => setSource(`${DEFAULT_URL}?t=${Date.now()}`);

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
        {returnButtonVisibility ? <Button
            adjustsFontSizeToFit
            onPress={handleReturnButtonPress}
            title="Return"
        /> : null}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  returnButton: {
    flex: 4,
    display: 'flex',
    height: 40,
    fontSize: 34,
    color: '#444',
    borderRadius: 20,
  },
  webView: {
    flex: 3,
    marginTop: StatusBar.currentHeight,
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