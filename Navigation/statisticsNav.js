import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import Header from "../shared/header";
import React from "react";
import StatisticsScreen from "../screens/statistics";

const StatisticsStack = createStackNavigator({
  benefecaire: {
    screen: StatisticsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Statistics" />
        ),
      };
    },
  },
});
export default StatisticsStack;
