import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const image = require("./assets/background.png");

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
    setGuessRounds(0);
  }

  function gameOverHandler(rounds) {
    setGameOver(true);
    setGuessRounds(rounds);
  }

  function restartGameHandler() {
    setUserNumber(null);
    setGameOver(false);
    setGuessRounds(0);
  } 
  function gameOverHandler(rounds) {
    setGameOver(true);
    setGuessRounds(rounds.length); // Fix: Send the length of the array
  }


  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber && !gameOver) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (gameOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={guessRounds}
        onRestart={restartGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={["#700139", "#ddb53f"]} style={styles.rootScreen}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.ImageBackground}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  ImageBackground: {
    opacity: 0.15,
  },
});
