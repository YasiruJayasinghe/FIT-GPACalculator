import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';


const DashboardScreen1 = () => {
  return (
        <View style={styles.container}>
            <View style={styles.flex1}>

            </View>
            <View style={styles.flex2}>
            </View>
            <View style={styles.flex3}>

            </View>

        </View>
  )
}

export default DashboardScreen1


const styles = StyleSheet.create({

    container:{
        flex: 1,
        width: 500,
    },

    flex1: {
         flex: 1,
          backgroundColor:"yellow"
    },
    flex2: {
        flex: 3,
        backgroundColor:"blue",
    },
    flex3: {
        flex: 1,
        backgroundColor:"green"
    }

  
  });
  