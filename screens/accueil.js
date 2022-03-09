import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { COMPTE } from "../Data/comptesData";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const AccueilScreen = (props) => {
  const RenderAccueil = (itemData) => {
    return (
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <View style={styles.iconView}>
            <MaterialIcons
              name="account-balance-wallet"
              size={34}
              color="#D2691E"
            />
          </View>
          <View>
            <View>
              <Text style={styles.textType}>{itemData.item.typeCompte}</Text>
            </View>
            <View>
              <Text style={styles.textCompte}>{itemData.item.numCompte}</Text>
            </View>
            <View>
              <Text style={styles.textTypeDown}>
                {itemData.item.typeCompte}
              </Text>
            </View>
          </View>
          <View style={styles.ViewEquilibre}>
            <Text style={styles.textEquilibre}>{itemData.item.Equilibre}</Text>
            <Text style={styles.textEquilibre}>MAD</Text>
            <FontAwesome5 name="coins" size={16} color="#ffbb33" />
          </View>
        </View>
      </View>
    );
  };
  const TextCompte = () => {
    return (
      <View style={styles.ViewCompte}>
        <Text style={styles.ViewTextCompte}> COMPTES :</Text>
      </View>
    );
  };
  const Assiste = () => {
    return (
      <View style={styles.ViewAssiste}>
        <Text style={styles.TextNameConseiller}>conseiler:</Text>
        <View style={styles.ViewFlexAssistence}>
          <View style={styles.EmailTele}>
            <View style={styles.viewIconUsers}>
              <FontAwesome name="users" size={28} color="black" />
            </View>
            <View>
              <Text style={styles.ViewNameAssiste}> Name Test</Text>
              <Text style={styles.lieuAssiste}>Agence Casablanca</Text>
            </View>
          </View>
          <View style={styles.EmailTele}>
            <View style={styles.Email}>
              <MaterialCommunityIcons
                name="email-edit-outline"
                size={35}
                color="#003300"
              />
            </View>
            <View style={styles.Tele}>
              <FontAwesome name="phone-square" size={35} color="#003300" />
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.ViewFlat}>
        <TextCompte />
        <FlatList
          data={COMPTE}
          keyExtractor={(item) => item.id}
          renderItem={RenderAccueil}
        />
      </View>
      <View style={styles.lastViewAssiste}>
        <Assiste />
        <View style={styles.ViewflexIcons}>
          <View style={styles.iconsStyle}>
            <FontAwesome5 name="coins" size={24} color="white" />
          </View>
          <View style={styles.iconsStyle}>
            <FontAwesome name="credit-card-alt" size={24} color="white" />
          </View>
          <View style={styles.iconsStyle}>
            <FontAwesome5 name="money-check-alt" size={24} color="white" />
          </View>
          <View style={styles.iconsStyle}>
            <Entypo name="swap" size={24} color="white" />
          </View>
          <View style={styles.iconsStyle}>
            <Feather name="plus" size={24} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewCompte: {
    backgroundColor: "white",
    borderRadius: 15,
  },
  ViewTextCompte: {
    fontSize: 25,
    padding: 20,
    margin: 2,
  },
  ViewFlat: {
    backgroundColor: "white",
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    marginTop: 7,
    backgroundColor: "#FFFAFA",
    borderRadius: 10,
    height: 80,
    elevation: 1,
    borderWidth: 0.25,
    marginHorizontal: 5,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    margin: 5,
  },
  iconView: {
    justifyContent: "center",
    marginLeft: 15,
  },
  textType: {
    fontSize: 20,
    margin: 5,
  },
  textTypeDown: {
    color: "#A9A9A9",
  },
  textCompte: {
    color: "#808080",
  },
  textEquilibre: {
    color: "#1a1a1a",
  },
  ViewEquilibre: {
    margin: 5,
    alignItems: "center",
  },
  ViewAssiste: {
    marginTop: 7,
    backgroundColor: "#FFFAFA",
    borderRadius: 10,
    height: 100,
    elevation: 1,
    borderWidth: 0.25,
    marginHorizontal: 5,
  },
  ViewFlexAssistence: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  EmailTele: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
  TextNameConseiller: {
    fontSize: 18,
    marginHorizontal: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  viewIconUsers: {
    backgroundColor: "#00cc00",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  ViewNameAssiste: {
    fontSize: 20,
  },
  Email: {
    marginHorizontal: 10,
  },
  Tele: {
    marginRight: 10,
  },
  lastViewAssiste: {
    backgroundColor: "#ffffcc",
    padding: 15,
    paddingBottom: 100,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -20,
  },
  ViewflexIcons: {
    flexDirection: "row",
  },
  iconsStyle: {
    backgroundColor: "#333300",
    padding: 12,
    borderRadius: 10,
    margin: 7,
  },
});

export default AccueilScreen;
