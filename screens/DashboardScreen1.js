import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground, Alert } from 'react-native';
import img from "../assets/faculty.png";
import { Picker } from '@react-native-picker/picker';




const DashboardScreen1 = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const showAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );

  
    const handleClearResults = () => {
        Alert.alert(
          'Confirmation',
          "Are you certain you want to clear all results?",
          [  
            { text: 'Yes', onPress: () => console.log('Yes Pressed') },  
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
        <ImageBackground
           source={img}
          resizeMode='cover'
          style={styles.bgImage}
        >
          <View style={styles.overlay} />

          <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        style={styles.Picker}
      >
        <Picker.Item label="Select the Degree Program" enabled={false} />
        <Picker.Item label="Artificial Inteligent" value="D01" />
        <Picker.Item label="Information Technology" value="D02" />
        <Picker.Item label="Information Technology & Management" value="D03" />
      </Picker>

      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        style={styles.Picker}
      >
        <Picker.Item label="Select your batch" enabled={false} />
        <Picker.Item label="Batch 22" value="B01" />
        <Picker.Item label="Batch 21" value="B02" />
        <Picker.Item label="Batch 20" value="B03" />
        <Picker.Item label="Batch 19" value="B04" />
      </Picker>
        </ImageBackground>
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
  }
});

export default DashboardScreen1;
