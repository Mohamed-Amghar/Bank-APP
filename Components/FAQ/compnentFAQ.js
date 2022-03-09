import React, { useState } from "react";
import { Modal, View, Button } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, StyleSheet } from "react-native";
const FadeExample = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <View style={styles.viewall}>
        <TouchableOpacity
          style={styles.touchAble}
          my={1}
          onPress={() => setShowModal(true)}
        >
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header>réponse</Modal.Header>
              <Modal.Body>{props.jawab}</Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal.Content>
          </Modal>
          <Text style={styles.textStyle}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FadeExample;

const styles = StyleSheet.create({
  viewall: { backgroundColor: "#f7e6ff" },
  touchAble: {
    margin: 5,
    borderWidth: 1,
    width: 350,
    paddingHorizontal: 15,

    height: 70,
    padding: 5,
    backgroundColor: "#ccffe6",
    borderRadius: 15,
  },
  boxstyle: {},
  textStyle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
