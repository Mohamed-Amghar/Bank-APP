import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import FinancementScreen from "../screens/FinancementScreen";

const FinancementStack = createStackNavigator({
  finance: {
    screen: FinancementScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="FINANCEMENT" />
        ),
      };
    },
  },
});

export default FinancementStack;
