import React, { useState } from "react";
import { StyleSheet } from "react-native";
import ComptesStack from "./Navigation/DrawerNav";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { store } from "./store/centredStore";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/Font/OpenSans-Regular.ttf"),
    "open-sans-medium": require("./assets/Font/OpenSans-Medium.ttf"),
    "open-sans-bold": require("./assets/Font/OpenSans-Bold.ttf"),
    "open-sans-light": require("./assets/Font/OpenSans-Light.ttf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <ComptesStack />
    </Provider>
  );
}

const styles = StyleSheet.create({});
