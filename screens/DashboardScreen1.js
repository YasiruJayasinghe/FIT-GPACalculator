import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground, Alert, ScrollView } from 'react-native';
import img from "../assets/faculty.png";
import { Picker } from '@react-native-picker/picker';

const DashboardScreen1 = ({ navigation }) => {
  const [selectedDegreeBatch, setSelectedDegreeBatch] = useState({ degree: "default", batch: "default"});
  console.log(selectedDegreeBatch);
  const clearResult = () => {
      setSelectedDegreeBatch({ ...selectedDegreeBatch, degree: "default", batch: "default" })
  }

  const handleClearResults = () => {
    Alert.alert(
      'Confirmation',
      "Are you certain you want to clear all results?",
      [
        { text: 'Yes', onPress: () => clearResult() },
        { text: 'No', onPress: () => console.log('No Pressed') },
      ]
    );
  };
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex1}>
        <Text style={styles.t1}>Cumulative GPA</Text>
      </View>

      <View style={styles.flex2}>
        <ScrollView >
        <ImageBackground
           source={img}
          resizeMode='cover'
          style={styles.bgImage}
        >
            <View style={styles.overlay} />
      <View style={styles.scrollContainer}>
          <Picker
            selectedValue={selectedDegreeBatch.degree}
            onValueChange={(itemValue) => setSelectedDegreeBatch({ ...selectedDegreeBatch, degree: itemValue })}
            style={styles.Picker}
          >
              <Picker.Item label="Select the Degree Program" value="default" enabled={false} />
              <Picker.Item label="Artificial Intelligent" value="D01" />
              <Picker.Item label="Information Technology" value="D02" />
              <Picker.Item label="Information Technology & Management" value="D03" />
          </Picker>

          <Picker
            selectedValue={selectedDegreeBatch.batch}
            onValueChange={(itemValue) => setSelectedDegreeBatch({ ...selectedDegreeBatch, batch: itemValue })}
            style={styles.Picker}
            >
            <Picker.Item label="Select your batch" value="default" enabled={false} />
            <Picker.Item label="Batch 22" value="B01" />
            <Picker.Item label="Batch 21" value="B02" />
            <Picker.Item label="Batch 20" value="B03" />
            <Picker.Item label="Batch 19" value="B04" />
          </Picker>

          <TouchableOpacity
            onPress={() => navigation.navigate("SemModuleScreen")}
            style={styles.SemButton}>
            <Text style={styles.t4}>Semester 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SemModuleScreen")}
            style={styles.SemButton}>
            <Text style={styles.t4}>Semester 2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SemModuleScreen")}
            style={styles.SemButton}>
            <Text style={styles.t4}>Semester 3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SemModuleScreen")}
            style={styles.SemButton}>
            <Text style={styles.t4}>Semester 4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SemModuleScreen")}
            style={styles.SemButton}>
            <Text style={styles.t4}>Semester 5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SemModuleScreen")}
            style={styles.SemButton}>
            <Text style={styles.t4}>Semester 6</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SemModuleScreen")}
            style={styles.SemButton}>
            <Text style={styles.t4}>Semester 7</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SemModuleScreen")}
            style={styles.SemButton}>
            <Text style={styles.t4}>Semester 8</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
        </ScrollView>
      </View>

      <View style={styles.flex3}>
        <View style={styles.bottonContainer}>
          <TouchableOpacity
            onPress={handleClearResults}
            style={styles.button}>
            <Text style={styles.t2}>Clear All Results</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  flex1: {
    flex: 0.7,
    backgroundColor: "#7CC3E1",
  },
  flex2: {
    flex: 3,
    backgroundColor: "white",
  },
  flex3: {
    flex: 0.5,
    backgroundColor: "#7CC3E1",
  },
  t1: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: "center",
    marginTop:5
  },
  button: {
    backgroundColor: "#56A2E9",
    borderRadius: 30,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 20,
  },
  bottonContainer: {
    paddingHorizontal: 75,
  },
  t2: {
    fontSize: 20,
    fontWeight: '800',
  },
  bgImage: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  Picker: {
    backgroundColor: "white",
    borderRadius: 30,
    marginTop:10,
    marginHorizontal:30,
  },
  SemButton: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 10,
    marginHorizontal:30,
    alignItems: "center",
    marginTop: 20,
  },
  scrollContainer:{
   marginBottom:10,
  }
  
});

export default DashboardScreen1;
