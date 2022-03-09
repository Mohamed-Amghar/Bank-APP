import React from "react";
import { SlideFade, Button, Box, View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, StyleSheet } from "react-native";
const SlideScreen = (props) => {
  return (
    <SlideFade in={isOpen}>
      <Box
        style={styles.boxstyle}
        p="40px"
        color="white"
        mt="6"
        bg="teal.500"
        rounded="md"
      >
        hello
      </Box>
    </SlideFade>
  );
};

export default SlideScreen;

const styles = StyleSheet.create({});
