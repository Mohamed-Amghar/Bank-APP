import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import BarChartScreen from "../Components/statistique/BarChart";
import LineChartScreen from "../Components/statistique/lineCart";

const StatisticsScreen = () => {
  return (
    <View>
      <LineChartScreen />
      <BarChartScreen />
    </View>
  );
};

const styles = StyleSheet.create({});

export default StatisticsScreen;
