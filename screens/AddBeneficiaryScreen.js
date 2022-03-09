import React, { useState } from "react";
import Colors from "../constant/Colors";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
  Text,
} from "react-native";
import Fonts from "../constant/Fonts";
import { addBenf } from "../store/centredStore";
import { useDispatch } from "react-redux";
import Card from "../Components/UI/Card";
const AddBeneficiaryScreen = () => {
  const dispatch = useDispatch();
  const [stateForm, setStateForm] = useState({
    name: "",
    numAccount: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onChangeForm = (name, value) => {
    setStateForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleAddBenef = async () => {
    setIsLoading(true);
    await dispatch(addBenf(stateForm.name, stateForm.numAccount));
    setIsLoading(false);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Add a new beneficiary </Text>
      </View>
      <Card style={styles.cardWrapper}>
        <View style={styles.inputForms}></View>
        <View style={styles.inputsWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={(content) => onChangeForm("name", content)}
            value={stateForm.name}
            placeholder="Enter name of the beneficiary"
            keyboardType="default"
          />
        </View>
        <View style={styles.inputsWrapper}>
          <TextInput
            name="numAccount"
            style={styles.input}
            onChangeText={(content) => onChangeForm("numAccount", content)}
            value={stateForm.numAccount}
            placeholder="Enter account number"
            keyboardType="default"
          />
        </View>
        <View style={styles.buttonWrapper}>
          {!isLoading && (
            <Button
              style={styles.button}
              title="Add New Beneficiary"
              onPress={handleAddBenef}
              disabled={!stateForm.numAccount || !stateForm.name}
            />
          )}
          {isLoading && <ActivityIndicator size="large" color="#00ff00" />}
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleWrapper: {
    marginTop: 25,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primaryDark,
    marginHorizontal: 65,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: Fonts.OpenSansMedium,
    color: Colors.secondaryLight,
  },
  cardWrapper: {
    marginTop: 40,
    height: "50%",
  },
  inputForms: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  inputsWrapper: {
    padding: 5,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 18,
    fontFamily: Fonts.OpenSansRegular,
  },
  buttonWrapper: {
    padding: 10,
    marginHorizontal: 80,
    marginTop: 40,
    borderRadius: 12,
  },
});

export default AddBeneficiaryScreen;
