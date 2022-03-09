import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import Header from "../shared/header";
import React from "react";
import DocumentsScreen from "../screens/document";

const DocumentsStack = createStackNavigator({
  benefecaire: {
    screen: DocumentsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Documents" />,
      };
    },
  },
});
export default DocumentsStack;
