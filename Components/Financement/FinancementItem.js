import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Card from "../UI/Card";
const FinancementItem = (props) => {
  return (
    <View>
      <Card style={styles.opacityStayle}>
        <View style={styles.iconStyle}>
          <MaterialCommunityIcons name="finance" size={30} color="black" />
        </View>
        <View style={styles.textstyle}>
          <View style={styles.namestyle}>
            <Text>{props.name} </Text>
          </View>
          <View style={styles.numberstyle}>
            <Text>{props.numcompte} </Text>
          </View>
          <View style={styles.prixstyle}>
            <Text>{props.prix} DH</Text>
          </View>
        </View>
        <View style={styles.exclamationIcon}>
          <AntDesign
            name="exclamationcircle"
            size={24}
            color="#87CEEB"
            onPress={() => console.log("hello")}
          />
        </View>
      </Card>
      <Card style={styles.viewConsulte}>
        <Text
          style={styles.TextConsulte}
          onPress={() => console.log("consulter succes")}
        >
          Consulter Les échéances
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  opacityStayle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  iconStyle: {
    marginLeft: 25,
  },
  textstyle: {
    marginRight: 25,
  },
  namestyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  prixstyle: {
    fontSize: 15,
    fontWeight: "400",
  },
  numberstyle: {
    color: "#708090",
  },
  textListe: {
    fontSize: 25,
    margin: 18,
    fontWeight: "900",
  },
  exclamationIcon: {
    margin: 10,
  },
  viewConsulte: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginTop: -6,
    marginBottom: 5,
    borderTopColor: "#C0C0C0",
    borderTopWidth: 0.5,
    height: 30,
    justifyContent: "center",
  },
  TextConsulte: {
    color: "#0000CD",
    marginRight: 10,
  },
});

export default FinancementItem;
