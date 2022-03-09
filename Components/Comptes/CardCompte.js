import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardCompte = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TouchOpa} onPress={props.onPress2}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.icon}>
            <AntDesign name="creditcard" size={24} color="black" />
          </View>

          <View style={styles.viewbox}>
            <Text style={styles.typeText}>{props.typeCompte}</Text>

            <View>
              <Text style={styles.numCompteText}>{props.numCompte}</Text>
              <Text style={styles.typeText2}>{props.typeCompte}</Text>
            </View>
          </View>
          <View style={styles.equilibrText}>
            <Text>{props.equilibre} MAD</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  TouchOpa: {
    backgroundColor: "white",
    height: 90,
    width: 400,
  },
  container: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    elevation: 5,
  },
  typeText: {
    fontSize: 23,
    marginLeft: 10,
  },
  equilibrText: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
  numCompteText: {
    color: "#008080",
    marginLeft: 20,
    marginTop: 2,
  },
  typeText2: {
    fontSize: 18,
    marginLeft: 10,
    color: "#A9A9A9",
  },
  icon: {
    padding: 20,

    justifyContent: "center",
    marginTop: 10,
  },
  viewbox: {
    flexDirection: "column",
    padding: 1,
  },
  icon: {
    padding: 20,

    justifyContent: "center",
    marginTop: 10,
  },
  viewbox: {
    flexDirection: "column",
    padding: 1,
  },
});

export default CardCompte;
