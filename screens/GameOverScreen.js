import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  const { roundsNumber, userNumber, onRestart } = props;
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // the fade-in effect is ued for all images when loading
          fadeDuration={100}
          // source={require("../assets/success.png")}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2019/01/22/18/30/summit-3948706_960_720.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.hightlight}>{roundsNumber}</Text> rounds to guess
          the number <Text style={styles.hightlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    /**
     * having the same height and width and also halving the borderRadius
     *
     */
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden", // The overflow is clipped, the rest of the content will be invisible
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  hightlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
