import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { COMPTE } from "../Data/comptesData";

import CardCompte from "../Components/Comptes/CardCompte";

const Comptes = (props) => {
  const renderCompte = (itemData) => {
    return (
      <View>
        <CardCompte
          typeCompte={itemData.item.typeCompte}
          numCompte={itemData.item.numCompte}
          equilibre={itemData.item.Equilibre}
          onPress2={() => props.navigation.navigate("compteDetails")}
        />
      </View>
    );
  };
  const TextTotal = () => {
    return (
      <View style={styles.SoldeTotale}>
        <Text style={styles.TextTotale}>Totale de solde est : 50000 dh</Text>
      </View>
    );
  };
  return (
    <View>
      <TextTotal />
      <FlatList
        data={COMPTE}
        keyExtractor={(item) => item.id}
        renderItem={renderCompte}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SoldeTotale: {
    alignItems: "center",
    backgroundColor: "#FFFAF0",
    height: 130,
  },
  TextTotale: {
    fontSize: 30,
    alignItems: "center",
    margin: 35,
  },
});

export default Comptes;
