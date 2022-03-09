import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { VERMENTE } from "../Data/vermentData";
import { AntDesign } from "@expo/vector-icons";

const VermentScreen = (props) => {
  const renderVerment = (itemData) => {
    return (
      <View>
        <TouchableOpacity style={styles.OpaTouchable}>
          <View style={styles.viewtouch}>
            <Text style={styles.textDate}>{itemData.item.dateSender}</Text>
          </View>
          <View style={styles.transfStyle}>
            <View>
              <View style={styles.viewTranslate}>
                <View>
                  <Text style={styles.text}>{itemData.item.sender}</Text>
                </View>
                <View>
                  <Text style={styles.text}>{itemData.item.compteSender} </Text>
                </View>
              </View>
              <View style={styles.icon}>
                <AntDesign name="retweet" size={24} color="black" />
              </View>
              <View style={styles.viewTranslate}>
                <Text style={styles.text}>{itemData.item.handSender}</Text>

                <Text style={styles.text}>
                  {itemData.item.compteHandSender}{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.viewtouch}>
            <Text>{itemData.item.quantiteSender} MAD </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={VERMENTE}
      keyExtractor={(item) => item.id}
      renderItem={renderVerment}
    />
  );
};

const styles = StyleSheet.create({
  OpaTouchable: {
    flex: 1,
    backgroundColor: "white",

    height: 140,
    margin: 5,
    borderRadius: 25,
    elevation: 7,
  },
  viewtouch: {
    alignItems: "center",
    margin: 3,

    borderRadius: 15,
    marginTop: 4,
  },
  viewTranslate: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    borderWidth: 0.5,
    padding: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "#ADD8E6",
  },
  transfStyle: {
    flex: 1,
    margin: 10,
    marginTop: 0,
  },
  icon: {
    marginLeft: 120,
    marginRight: 170,
    backgroundColor: "#ADD8E6",
    paddingHorizontal: 8,
    borderRadius: 25,
  },
  text: {
    fontSize: 15,
    padding: 5,
  },
  textDate: {
    color: "black",
    fontWeight: "bold",
  },
});
export default VermentScreen;
