import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import Header from "../shared/header";
import React from "react";
import ChequeScreen from "../screens/cheque";

const ChequeStack = createStackNavigator({
  cheque: {
    screen: ChequeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Cheques" />,
      };
    },
  },
});
export default ChequeStack;
