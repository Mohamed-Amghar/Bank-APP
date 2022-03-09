import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FINANCE } from "../Data/finenceData";
import FinancementItem from "../Components/Financement/FinancementItem";
const FinancementScreen = (props) => {
  return (
    <View>
      <Text style={styles.textListe}>Liste Des Financement:</Text>

      <FlatList
        data={FINANCE}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <FinancementItem
            name={itemData.item.Name}
            numcompte={itemData.item.numCompte}
            prix={itemData.item.Prix}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textListe: {
    fontSize: 25,
    margin: 18,
    fontWeight: "900",
  },
});

export default FinancementScreen;
