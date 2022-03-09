import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import IconDocument from "../Components/Documents/iconDocument";
import InputDate from "../Components/Documents/InputDate";
import RNPickerSelect from "react-native-picker-select";

const TypeDown = () => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      placeholder={{
        label: "Document Type",
        value: null,
      }}
      items={[
        { label: "JPG", value: "JPG" },
        { label: "PDF", value: "PDF" },
        { label: "MPGJ", value: "MPGJ" },
      ]}
    />
  );
};
const CompteDown = () => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      placeholder={{
        label: "Compte",
        value: "",
      }}
      items={[
        { label: "CHEQUE", value: "CHEQUE" },
        { label: "Epagne", value: "Epagne" },
        { label: "Plus", value: "Plus" },
      ]}
    />
  );
};

const DocumentsScreen = () => {
  return (
    <View>
      <IconDocument />
      <InputDate title="Date Début DD/MM/YY" />
      <InputDate title="Date Fin DD/MM/YY" />
      <View style={styles.TtypeDown}>
        <TypeDown />
      </View>
      <View style={styles.TtypeDown}>
        <CompteDown />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TtypeDown: {
    borderColor: "grey",
    marginHorizontal: 15,
    margin: 5,
    borderWidth: 1,
    height: 40,
    justifyContent: "center",
    borderRadius: 15,
  },
});

export default DocumentsScreen;
