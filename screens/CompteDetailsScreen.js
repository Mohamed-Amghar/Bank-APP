import React, { useState } from "react";
import Colors from "../constant/Colors";
import { View, StyleSheet } from "react-native";
import Fonts from "../constant/Fonts";
import { NavigationContainer } from "@react-navigation/native";

import CardCompte from "../Components/Comptes/CardCompte";
import { COMPTE } from "../Data/comptesData";
import { FlatList } from "react-native-gesture-handler";
import MyTabs from "../Components/Comptes/FooterTab";
const CompteDetailsScreen = (itemData) => {
  const renderCompte = (itemData) => {
    return (
      <View>
        <CardCompte
          typeCompte={itemData.item.typeCompte}
          numCompte={itemData.item.numCompte}
          equilibre={itemData.item.Equilibre}
        />
      </View>
    );
  };
  const filteredCompte = COMPTE.filter(
    (comptesData) => comptesData.typeCompte === "comptes cheque"
  );
  return (
    <NavigationContainer>
      <FlatList data={filteredCompte} renderItem={renderCompte} />

      <MyTabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    marginTop: 40,
    height: "50%",
  },
});

export default CompteDetailsScreen;
