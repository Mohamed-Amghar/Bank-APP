import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import React from "react";
import VermentScreen from "../screens/Verment";
import Header from "../shared/header";

const VermentStack = createStackNavigator({
  verment: {
    screen: VermentScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="VERMENT" />,
      };
    },
  },
});

export default VermentStack;
