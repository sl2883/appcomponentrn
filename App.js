import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CleverTap = require('clevertap-react-native'); 
CleverTap.setDebugLevel(3);

function sendEvent() {
  CleverTap.setDebugLevel(3);
  console.log("test this")
  CleverTap.recordEvent("Product Viewed", {});

  CleverTap.getInboxMessageCount((err, res) => {
      console.log('Total Messages: ', res, err);
  });

  CleverTap.getAllInboxMessages((err, res) => {
      console.log('All Inbox Messages: ', res, err);
  });

  CleverTap.showInbox({
    'tabs': ['Offers', 'Promotions'],
    'navBarTitle': 'My App Inbox',
    'navBarTitleColor': '#FF0000',
    'navBarColor': '#FFFFFF',
    'inboxBackgroundColor': '#AED6F1',
    'backButtonColor': '#00FF00',
    'unselectedTabColor': '#0000FF',
    'selectedTabColor': '#FF0000',
    'selectedTabIndicatorColor': '#000000',
    'noMessageText': 'No message(s)',
    'noMessageTextColor': '#FF0000'
});
}

export default function App() {
  CleverTap.setDebugLevel(3);
  CleverTap.createNotificationChannel("generic", "generic", "Generic", 5, true);
  CleverTap.enableDeviceNetworkInfoReporting(true);

  CleverTap.initializeInbox();

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
