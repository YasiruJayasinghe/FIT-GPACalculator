import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const SemModuleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View>
        <Text>hi</Text>
    </View>
    </SafeAreaView>
  )
}

export default SemModuleScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },

  });
  