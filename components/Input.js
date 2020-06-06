import React from "react";
import { StyleSheet, TextInput } from "react-native";

// this will be the basic UI component for Inputs
const Input = (props) => {
  const { style } = props;

  // attributes replace previously placed attributes from right to left
  return (
    <TextInput {...props} style={{ ...styles.input, ...style }}></TextInput>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
