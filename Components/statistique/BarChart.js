import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const BarChartScreen = () => {
  return (
    <View>
      <View style={styles.ViewAdrr}>
        <Text style={styles.textAdrr}>Bar Chart</Text>
      </View>
      <BarChart
        data={{
          labels: ["January", "February", "March", "April", "May"],
          datasets: [{ data: [10, 20, 50, 40, 20] }],
        }}
        width={Dimensions.get("window").width - 10}
        height={210}
        yAxisLabel={"$ - "}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#458336",
          backgroundGradientTo: "#458336",
          decimalPlaces: 2,
          color: (opacity = 255) => "#ECEFF1",
          borderRadius: 25,
          style: {
            borderRadius: 25,
            padding: 10,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          margin: 5,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  ViewAdrr: {
    backgroundColor: "#ffffe6",
    marginHorizontal: 7,
    borderRadius: 15,
  },
  textAdrr: {
    fontSize: 18,
    paddingHorizontal: 25,
    fontFamily: "OpenSansMedium",
  },
});

export default BarChartScreen;
