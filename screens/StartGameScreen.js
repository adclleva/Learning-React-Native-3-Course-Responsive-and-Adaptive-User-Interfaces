import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  const { onStartGame } = props;

  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    // this is sort of a validation to only have numbered inputs and not . or ,'s
    // this means to replace any non-number with an empty string
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    // This will be set as validations if it's a valid number between 1 and 99
    const chosenNumber = parseInt(enteredValue);

    // we utilized builtin the isNaN function to determine if a number is NaN
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
      setEnteredValue("");
      // we are utilizing the alert API to create a alert when this condition is triggered
      Alert.alert("Invalid number!", "Enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    setConfirmed(true);
    setEnteredValue("");
    /**
     * we can have this setState be after since the setState calls will
     * be batched together and the changes will be shown within
     * the next render cycle
     *  */
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  const displayConfirmedOutput = () => {
    let confirmedOutput;

    if (confirmed) {
      confirmedOutput = (
        <Card style={styles.summaryContainer}>
          <BodyText>You selected</BodyText>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <MainButton onPress={() => onStartGame(selectedNumber)}>
            Start Game
          </MainButton>
        </Card>
      );
    }

    return confirmedOutput;
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <Card style={styles.inputContainer}>
          <Text style={styles.title}>Select a New Games!</Text>
          {/** here is where we implement the custom width to the input */}
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title="Confirm"
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {/* have this as a function call is experimenting whether to use a function 
            to display the confirmed input*/}
        {displayConfirmedOutput()}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: "40%",
  },
  input: {
    width: "10%",
    /**
     *  we use this textAlign property to have the user text
     * be shown within the middle
     **/
    textAlign: "center",
  },

  summaryContainer: {
    marginVertical: 20,
    /**
     * since we want the width to be only surrounding the number
     * and the default is stretch
     */
    alignItems: "center",
  },
});

export default StartGameScreen;
