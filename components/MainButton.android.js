import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback, // this gives us a touchable object with a ripple affect
  Platform,
} from "react-native";
import Colors from "../constants/colors";

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  // only android version 21 or higher only supports the ripple affect
  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  const { children, onPress } = props;

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.7} onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden", // this means any child component will be clipped
  },
});

export default MainButton;
