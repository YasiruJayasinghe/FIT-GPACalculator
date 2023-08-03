import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DashboardScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select the Degree Program" enabled={false} />
        <Picker.Item label="Artificial Inteligent" value="C01" />
        <Picker.Item label="Information Technology" value="C02" />
        <Picker.Item label="Information Technology & Management" value="C03" />
      </Picker>

      <TouchableOpacity 
        onPress={() => navigation.navigate("DashboardScreen")}
        style={styles.button}>
        <Text style={styles.t4}>Semester 1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("DashboardScreen")}
        style={styles.button}>
        <Text style={styles.t4}>Semester 2</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("DashboardScreen")}
        style={styles.button}>
        <Text style={styles.t4}>Semester 3</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("DashboardScreen")}
        style={styles.button}>
        <Text style={styles.t4}>Semester 4</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("DashboardScreen")}
        style={styles.button}>
        <Text style={styles.t4}>Semester 5</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("DashboardScreen")}
        style={styles.button}>
        <Text style={styles.t4}>Semester 6</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("DashboardScreen")}
        style={styles.button}>
        <Text style={styles.t4}>Semester 7</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("DashboardScreen")}
        style={styles.button}>
        <Text style={styles.t4}>Semester 8</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  picker: {
    width: 300,
    backgroundColor: "#808080",

  },
  button: {
    backgroundColor: "#999999",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 90,
    alignItems: "center",
    marginTop: 25,
  },
  t4: {
    fontSize: 20,
    fontWeight:500
  },
});
