import React from 'react';
import Nav from './Navigation/Navigation';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Nav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});