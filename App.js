import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CleverTap = require('clevertap-react-native'); 
CleverTap.setDebugLevel(3);

function sendEvent() {
  CleverTap.setDebugLevel(3);
  console.log("test this")
  CleverTap.recordEvent("Product Viewed", {});
}



export default function App() {
  CleverTap.setDebugLevel(3);
  CleverTap.createNotificationChannel("generic", "generic", "Generic", 5, true);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Send Event"
        onPress={() =>sendEvent()}
      />
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
