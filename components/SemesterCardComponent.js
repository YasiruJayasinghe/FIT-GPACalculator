import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";

const Cards = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.card}>
          <Card.Title style={[styles.title, styles.titleText]}> Level 1 Semester 1</Card.Title>
            <Card.Divider />
            <Text style={styles.t1}>Current GPA: </Text>
            <Text style={styles.t1}>Total Credits: </Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.t2}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.t2}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.t2}>Delete</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#4E5AC8",
    width:80
  },

  buttons: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems:'center',
  },

  t1: {
    fontWeight:400,
    fontSize:15,
  },

  t2: {
    fontWeight:400,
    fontSize:12,
  },

  title: {
    backgroundColor:'#4E5AC8',
    padding:15
  },

  card: {
    borderWidth: 2,
    borderColor:'#4E5AC8'
  },

  titleText: {
    color: 'white',
  },

});

export default Cards;
