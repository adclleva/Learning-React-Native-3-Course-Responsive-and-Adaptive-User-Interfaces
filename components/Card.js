import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  // we can pass in styles from the props component
  const { children, style } = props;
  /**
   * since we have the style as second when having the style object
   * it will override the previous key/val pairs
   *  */

  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    // shadow properties only works for ios
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,

    // elevation only works on android
    elevation: 8,

    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});

export default Card;
