import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/primaryButton";

function generateRandomBetween(min, max, exclude) {
  if (max - min <= 1) return min; // Prevents infinite recursion

  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
}

// Reset boundaries when game restarts
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState(1);
  const [guessHistory, setGuessHistory] = useState([initialGuess]); // Store history

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessHistory); // Send full history
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [userNumber]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess <= userNumber) ||
      (direction === "higher" && currentGuess >= userNumber)
    ) {
      Alert.alert("Don't Lie!", "You know that this is incorrect.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevRounds) => prevRounds + 1);
    setGuessHistory((prevHistory) => [newRndNumber, ...prevHistory]); // Update history
  }

  return (
    <View style={styles.screen}>
      <Title>Computer Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 20, color: "#f0a80c" }}>
            Higher or Lower?
          </Text>
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              -
            </PrimaryButton>

            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </View>

      {/* Guess History */}
      <FlatList
        data={guessHistory}
        keyExtractor={(item, index) => `${item}-${index}`} // Stable key
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>#{guessHistory.length - index}</Text>
            <Text style={styles.listText}>Computer Guess: {item}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
    padding: 6,
    backgroundColor: "#4e0228",
    marginHorizontal: 24,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    width: "100%",
    maxWidth: "80%",
  },
  listItem: {
    borderColor: "#4e0228",
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: "#ddb53f",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});
