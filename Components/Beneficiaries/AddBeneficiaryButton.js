import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constant/Colors";
const AddBeneficiaryButton = (props) => {
  return (
    <AntDesign
  name="pluscircle"
      size={55}
      color={Colors.primary}
      onPress={() => props.navigation.navigate("addBeneficiary")}
    />
  );
};

const styles = StyleSheet.create({});
export default AddBeneficiaryButton;
