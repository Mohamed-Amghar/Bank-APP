import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Card from "../UI/Card";
import RightSwipe from "./RightSwipe";
import Fonts from "../../constant/Fonts";
import Colors from "../../constant/Colors";

const BeneficiaryItem = (props) => {
  return (
    <Swipeable renderRightActions={() => <RightSwipe />}>
      <Card style={styles.cardStyle}>
        <View style={styles.flexrow}>
          <View style={styles.iconView}>
            <FontAwesome name="user" size={30} color={Colors.secondary} />
          </View>
          <View>
            <View style={styles.ViewName}>
              <Text style={styles.textName}>{props.name}</Text>
            </View>
            <View style={styles.ViewNum}>
              <Text style={styles.textNum}>{props.numCompte}</Text>
            </View>
          </View>
          <View style={styles.flechIcon}>
            <AntDesign name="left" size={24} color={Colors.secondary} />
          </View>
        </View>
      </Card>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  ViewName: {
    padding: 10,
    marginRight: 70,
  },
  textName: {
    fontSize: 19,
    fontFamily: Fonts.OpenSansMedium,
  },
  ViewNum: {
    marginLeft: 10,
  },
  textNum: {
    color: Colors.secondary,
  },
  flexrow: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  iconView: {
    justifyContent: "center",
    marginLeft: 25,
  },
  flechIcon: {
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 10,
  },
});
export default BeneficiaryItem;
