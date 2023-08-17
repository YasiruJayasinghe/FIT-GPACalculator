import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <View >
      <View style={styles.logoImage}>
      <Image 
        style={styles.logo}
        source={require("../assets/logo.png")}
      />
      </View>
      <Text style={styles.t1}>Welcome!</Text>
      <Text style={styles.t2}>FIT</Text>
      <Text style={styles.t3}>GPA Mate</Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate("HomeScreen")}
        style={styles.button}
      >
        <Text style={styles.t4}>Get Started</Text>
      </TouchableOpacity>
      <Image 
      source={require("../assets/graduation.png")}
      style={styles.bottomImage}
      />
    </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },

  logo: {
    marginTop: 30,
    width:300,
    height:300,
    padding:10

  },

  t1: {
    fontSize: 60,
    fontWeight: '700',
    textAlign:"center",
    justifyContent:"center",
    color:"#1C5BB9"

  },

  t2: {
    fontSize: 48,
    fontWeight: '700',
    textAlign:"center",
    justifyContent:"center",
  },

  t3: {
    fontSize: 30,
    fontWeight: '700',
    textAlign:"center"
  },

  button: {
    backgroundColor: "#7CC3E1",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: "center",
    marginTop: 20,
  },

  t4: {
    fontSize: 30,
    fontWeight: '600',
    color: "#ffffff",
    textAlign:"center",
    
  },
  bottomImage: {
    width:"100%",
    resizeMode: 'contain',
    height:100,
    marginTop: 0,

  }

});
