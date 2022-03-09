import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Input } from "react-native-elements";

const InputDate = (props) => {
  return (
    <View style={styles.InputDate}>
      <Input
        placeholder={props.title}
        leftIcon={<Fontisto name="date" size={18} color="black" />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  InputDate: {
    marginHorizontal: 20,
    marginTop: 0,
  },
});

export default InputDate;
