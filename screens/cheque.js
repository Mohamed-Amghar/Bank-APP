import * as React from "react";
import Fonts from "../constant/Fonts";
import {
  View,
  useWindowDimensions,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { COMPTE } from "../Data/comptesData";
import { VERMENTE } from "../Data/vermentData";

const filteredVerment = VERMENTE.filter(
  (verment) => verment.typeCompte === "compte Cheque"
);
const filteredVerment2 = VERMENTE.filter(
  (verment) => verment.typeCompte === "compte Epagne"
);
const filteredCompte = COMPTE.filter(
  (comptesData) => comptesData.typeCompte === "comptes cheque"
);
const filteredCompte2 = COMPTE.filter(
  (comptesData) => comptesData.typeCompte === "comptes Epargne"
);
const FirstRenderCheque = (itemData) => {
  return (
    <View style={styles.viewFirstRender}>
      <View>
        <AntDesign name="creditcard" size={38} color="#4d4d00" />
      </View>
      <View>
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontFamily: Fonts.OpenSansMedium,
          }}
        >
          {itemData.item.typeCompte}
        </Text>
        <Text style={{ color: "#008080" }}>{itemData.item.numCompte}</Text>
      </View>
      <View>
        <Text style={{ color: "#86b300", fontSize: 15, fontWeight: "bold" }}>
          {itemData.item.Equilibre} MAD
        </Text>
      </View>
    </View>
  );
};
const FirstRenderCheque1 = (itemData) => {
  return (
    <View style={styles.viewFirstRender}>
      <View>
        <AntDesign name="creditcard" size={38} color="#4d4d00" />
      </View>
      <View>
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontFamily: Fonts.OpenSansMedium,
          }}
        >
          {itemData.item.typeCompte}
        </Text>
        <Text style={{ color: "#008080" }}>{itemData.item.numCompte}</Text>
      </View>
      <View>
        <Text style={{ color: "#86b300", fontSize: 15, fontWeight: "bold" }}>
          {itemData.item.Equilibre} MAD
        </Text>
      </View>
    </View>
  );
};

const SecondRenderCheque2 = (itemData) => {
  return (
    <View style={styles.viewSecondRender}>
      <View>
        <Text
          style={{
            color: "black",
            paddingVertical: 10,
            paddingHorizontal: 5,
            fontFamily: Fonts.OpenSansBold,
          }}
        >
          {itemData.item.typeCompte}
        </Text>
        <Text
          style={{
            color: "black",
            paddingVertical: 10,
            paddingHorizontal: 5,
            fontFamily: Fonts.OpenSansBold,
          }}
        >
          {itemData.item.sender}
        </Text>
      </View>
      <View style={styles.viewCenter}>
        <Text style={{ color: "black", fontWeight: "bold" }}>
          {itemData.item.dateSender}
        </Text>
        <MaterialIcons
          style={{ paddingVertical: 15 }}
          name="swap-horizontal-circle"
          size={38}
          color="black"
        />
        <Text style={{ color: "black", fontFamily: Fonts.OpenSansBold }}>
          {itemData.item.quantiteSender} MAD
        </Text>
      </View>
      <View style={{ marginRight: 20, paddingRight: 10 }}>
        <Text
          style={{
            color: "black",
            paddingVertical: 10,
            fontSize: 12,
          }}
        >
          {itemData.item.compteHandSender}
        </Text>

        <Text
          style={{
            color: "black",
            paddingVertical: 10,
            fontSize: 12,
          }}
        >
          {itemData.item.compteSender}
        </Text>
      </View>
    </View>
  );
};
const SecondRenderCheque = (itemData) => {
  return (
    <View style={styles.viewSecondRender}>
      <View>
        <Text
          style={{
            color: "black",
            paddingVertical: 10,
            paddingHorizontal: 5,
            fontFamily: Fonts.OpenSansBold,
          }}
        >
          {itemData.item.typeCompte}
        </Text>
        <Text
          style={{
            color: "black",
            paddingVertical: 10,
            paddingHorizontal: 5,
            fontFamily: Fonts.OpenSansBold,
          }}
        >
          {itemData.item.sender}
        </Text>
      </View>
      <View style={styles.viewCenter}>
        <Text style={{ color: "black", fontWeight: "bold" }}>
          {itemData.item.dateSender}
        </Text>
        <MaterialIcons
          style={{ paddingVertical: 12 }}
          name="swap-horizontal-circle"
          size={38}
          color="black"
        />
        <Text style={{ color: "black", fontFamily: Fonts.OpenSansBold }}>
          {itemData.item.quantiteSender} MAD
        </Text>
      </View>
      <View style={{ marginRight: 15 }}>
        <Text style={{ color: "black", paddingVertical: 10, fontSize: 12 }}>
          {itemData.item.compteHandSender}
        </Text>

        <Text
          style={{
            color: "black",
            paddingVertical: 10,
            fontSize: 12,
          }}
        >
          {itemData.item.compteSender}
        </Text>
      </View>
    </View>
  );
};
const FirstRoute = (itemData) => (
  <View style={{ flex: 1, backgroundColor: "#00334d" }}>
    <FlatList
      data={filteredCompte}
      renderItem={FirstRenderCheque}
      keyExtractor={(item) => item.id}
    />
    <FlatList
      data={filteredVerment}
      renderItem={SecondRenderCheque}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#00334d" }}>
    <FlatList
      data={filteredCompte2}
      renderItem={FirstRenderCheque1}
      keyExtractor={(item) => item.id}
    />
    <FlatList
      data={filteredVerment2}
      renderItem={SecondRenderCheque2}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const ChequeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Compte Cheque" },
    { key: "second", title: "Compte Epagne" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
const styles = StyleSheet.create({
  viewFirstRender: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f2ffe6",
    borderRadius: 15,
    height: 90,
  },
  viewSecondRender: {
    flex: 1,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#80d4ff",
    borderRadius: 15,
    height: 110,
    width: "99%",
  },
  viewCenter: {
    alignItems: "center",
  },
});
export default ChequeScreen;
