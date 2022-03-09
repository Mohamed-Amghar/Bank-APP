import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import Header from "../shared/header";
import React from "react";
import AssistanceScreen from "../screens/assistance";

const AssistanceStack = createStackNavigator({
  benefecaire: {
    screen: AssistanceScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Assistance" />
        ),
      };
    },
  },
});
export default AssistanceStack;
