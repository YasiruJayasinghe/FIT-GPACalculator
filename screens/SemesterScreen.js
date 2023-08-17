import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView
} from "react-native";
import React from "react";
import NavigationBar from "react-native-navbar";

const rightButtonConfig = {
  title: "Next",
  handler: () => alert("hello!"),
  tintColor:'white'
};

const leftButtonConfig = ({ navigation }) => ({
    title: "back",
    handler: () => navigation.navigate('HomeScreen'),
    tintColor: 'white'
  });

const titleConfig = {
  title : "GPA CALCULATOR",
  tintColor:'white',
};

const SemesterScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <NavigationBar
        title={titleConfig}
        rightButton={rightButtonConfig}
        leftButton={leftButtonConfig({ navigation })}
        style={styles.navBar}
      />
      <Text style={styles.t1}>Select the Semester</Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={styles.SemButton}
        >
          <Text style={styles.t2}>Level 1 Semester 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SemModuleScreen")}
          style={styles.SemButton}
        >
          <Text style={styles.t2}>Level 1 Semester 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SemModuleScreen")}
          style={styles.SemButton}
        >
          <Text style={styles.t2}>Level 2 Semester 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SemModuleScreen")}
          style={styles.SemButton}
        >
          <Text style={styles.t2}>Level 2 Semester 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SemModuleScreen")}
          style={styles.SemButton}
        >
          <Text style={styles.t2}>Level 3 Semester 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SemModuleScreen")}
          style={styles.SemButton}
        >
          <Text style={styles.t2}>Level 3 Semester 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SemModuleScreen")}
          style={styles.SemButton}
        >
          <Text style={styles.t2}>Level 4 Semester 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SemModuleScreen")}
          style={styles.SemButton}
        >
          <Text style={styles.t2}>Level 4 Semester 2</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SemesterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  SemButton: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 30,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#4E5AC8",
  },

  t1: {
    paddingLeft: 25,
    fontWeight: 400,
    fontSize: 18,
  },

  t2: {
    color: "#0D1DAA",
    fontWeight: 500,
    fontSize: 15,
  },

  navBar: {
    backgroundColor:'#0D1DAA',
    height:70
  },

});
