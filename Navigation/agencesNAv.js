import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import Header from "../shared/header";
import React from "react";
import AgencesScreen from "../screens/agences";

const AgencesStack = createStackNavigator({
  benefecaire: {
    screen: AgencesScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Agences" />,
      };
    },
  },
});
export default AgencesStack;
