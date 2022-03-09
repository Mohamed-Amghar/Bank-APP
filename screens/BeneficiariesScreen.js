import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { BENEFICIARE } from "../Data/beneficiareData";
import AddBeneficiaryButton from "../Components/Beneficiaries/AddBeneficiaryButton";
import BeneficiaryItem from "../Components/Beneficiaries/BeneficiaryItem";
import ScreenColorUI from "../Components/UI/ScreenColorUI";
const BenefecaireScreen = (props) => {
  return (
    <ScreenColorUI>
      <View style={styles.screen}>
        <FlatList
          data={BENEFICIARE}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <BeneficiaryItem
              name={itemData.item.Name}
              numCompte={itemData.item.NumCompte}
            />
          )}
        />
        <View style={styles.iconNouveaux}>
          <AddBeneficiaryButton navigation={props.navigation} />
        </View>
      </View>
    </ScreenColorUI>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
  },
  iconNouveaux: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 20,
  },
});

export default BenefecaireScreen;
