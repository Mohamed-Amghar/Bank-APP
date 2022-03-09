import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconDocument = (props) => {
  return (
    <View style={styles.File}>
      <View>
        <Feather name="file-text" size={55} color="black" />
      </View>
      <Text style={styles.documentText}>Documents</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  File: {
    backgroundColor: "red",
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    alignItems: "center",
    height: 140,
    justifyContent: "center",
  },
  documentText: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 7,
  },
});

export default IconDocument;
