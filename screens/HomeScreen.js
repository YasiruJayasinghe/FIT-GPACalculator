import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import React from "react";
import NavigationBar from "react-native-navbar";
import Cards from "../components/SemesterCardComponent";
import Ionicons from "@expo/vector-icons/Ionicons";

const rightButtonConfig = {
  title: "Next",
  handler: () => alert("hello!"),
  tintColor: "white",
};

const leftButtonConfig = ({ navigation }) => ({
  title: "back",
  handler: () => navigation.navigate("WelcomScreen"),
  tintColor: "white",
});

const titleConfig = {
  title: "HOME",
  tintColor: "white",
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={leftButtonConfig({ navigation })}
          style={styles.navBar}
        />
        <Cards />
        <Cards />
        <Cards />
      </ScrollView>

      <Ionicons
        name="add-circle"
        size={60}
        color="#0D1DAA"
        style={styles.plusButton}
        onPress={() => navigation.navigate("SemesterScreen")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  navBar: {
    backgroundColor: "#0D1DAA",
    height: 70,
  },

  plusButton: {
    marginLeft:290
  },
});
