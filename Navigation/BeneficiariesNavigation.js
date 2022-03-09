import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import BenefecaireScreen from "../screens/BeneficiariesScreen";
import Header from "../shared/header";
import AddBeneficiaryScreen from "../screens/AddBeneficiaryScreen";
import React from "react";
import { DefaultNavigationOption } from "./DefaultNavigationOption";
const BenefecaireStack = createStackNavigator(
  {
    benefecaire: {
      screen: BenefecaireScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Beneficiaries" />
          ),
        };
      },
    },
    addBeneficiary: {
      screen: AddBeneficiaryScreen,
      navigationOptions: () => {
        return {
          headerTitle: "Add Beneficiary",
          headerTintColor: "black",
        };
      },
    },
  },
  {
    defaultNavigationOptions: DefaultNavigationOption,
  }
);
export default BenefecaireStack;
