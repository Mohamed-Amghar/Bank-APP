import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constant/Colors";
const ScreenColorUI = (props) => {
  return (
    <LinearGradient
      colors={[Colors.primaryLight, Colors.secondaryLight]}
      style={styles.gradient}
    >
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
export default ScreenColorUI;
