import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const AssistanceScreen = () => {
  return (
    <View>
      <View style={styles.TextUp}>
        <Text style={styles.textLast}>
          Pour tout les information de reclamation, veuiller contacter les
          centre
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.iconTime}>
          <Ionicons name="time-sharp" size={24} color="black" />
        </View>
        <View style={styles.Time}>
          <Text>Lundi au vendredi</Text>
          <Text>9:00 - 15:00</Text>
        </View>
      </View>
      <View style={styles.Tele}>
        <Text>0533338752</Text>
      </View>
      <View style={styles.TextUp}>
        <Text style={styles.textsec}>
          Pour tout les information de reclamation, veuiller contacter les
          centre
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.iconUser}>
          <FontAwesome5 name="user-circle" size={24} color="black" />
        </View>
        <View style={styles.User}>
          <Text> 24h / 24 </Text>
          <Text> 7j / 7 </Text>
        </View>
      </View>
      <View style={styles.Tele}>
        <Text>0533338752</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLast: {
    marginHorizontal: 50,
    fontSize: 20,
  },
  container: {
    marginTop: 7,
    backgroundColor: "#80d4ff",
    borderRadius: 10,
    height: 80,
    elevation: 1,
    borderWidth: 0.25,
    marginHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  Tele: {
    marginTop: 7,
    backgroundColor: "#ffc34d",
    borderRadius: 50,
    height: 60,
    elevation: 1,
    borderWidth: 0.25,
    marginHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconTime: {
    marginRight: 20,
  },
  iconUser: {
    marginRight: 40,
  },
  Time: {
    marginLeft: 20,
    marginRight: 50,
  },
  TextUp: {
    margin: 10,
  },
  textsec: {
    marginHorizontal: 50,
    fontSize: 20,
  },
  User: {
    marginLeft: 20,
    marginRight: 70,
  },
});

export default AssistanceScreen;
