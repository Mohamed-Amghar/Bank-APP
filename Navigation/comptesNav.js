import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Comptes from "../screens/comptes";
import Header from "../shared/header";
import CompteDetailsScreen from "../screens/CompteDetailsScreen";

const ComptesStack = createStackNavigator({
  comptes: {
    screen: Comptes,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="COMPTES" />,
      };
    },
  },
  compteDetails: {
    screen: CompteDetailsScreen,
    navigationOptions: () => {
      return {
        headerTitle: "Compte Details",
        headerTintColor: "black",
      };
    },
  },
});

export default ComptesStack;
