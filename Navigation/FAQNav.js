import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import Header from "../shared/header";
import React from "react";
import FAQScreen from "../screens/FAQ";

const FAQStack = createStackNavigator({
  benefecaire: {
    screen: FAQScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="FAQ" />,
      };
    },
  },
});
export default FAQStack;
