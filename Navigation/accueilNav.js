import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import Header from "../shared/header";
import React from "react";
import AgencesScreen from "../screens/agences";
import AccueilScreen from "../screens/accueil";
import { FontAwesome } from "@expo/vector-icons";

const AccueilStack = createStackNavigator({
  benefecaire: {
    screen: AccueilScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header
            navigation={navigation}
            title="Accueil"
            icon={<FontAwesome name="user" size={24} color="black" />}
          />
        ),
      };
    },
  },
});
export default AccueilStack;
