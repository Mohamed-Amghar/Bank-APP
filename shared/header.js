import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Fonts from "../constant/Fonts";
import Colors from "../constant/Colors";
export default function Header({ navigation, title, icon }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View>
        <MaterialIcons
          name="menu"
          size={28}
          onPress={openMenu}
          style={styles.icon}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title.toUpperCase()}</Text>
      </View>
      <View style={styles.iconUser}>
        <Text>{icon}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 20,
    color: Colors.secondaryDark,
    letterSpacing: 1,
  },
  icon: {},
  iconUser: {
    alignItems: "flex-end",
  },
});
