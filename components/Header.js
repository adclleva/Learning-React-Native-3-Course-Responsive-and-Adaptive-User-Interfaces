import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
  const { title } = props;

  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  // this will take the full width of the parent component
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
  },
  headerAndroid: {
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
    backgroundColor: Colors.primary,
    color: "#fff",
  },
  headerTitle: {
    color: Platform.OS === "ios" ? Colors.primary : "#fff",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
