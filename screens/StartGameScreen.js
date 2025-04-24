import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/primaryButton";
import Title from "../components/title";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function numberInputHandler(enteredText) {
    if (!isNaN(enteredText) || enteredText === "") {
      setEnteredNumber(enteredText);
    }
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.Text}>Enter a Number</Text>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    padding: 16,
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
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb53f",
    color: "#ddb53f",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  Text: {
    color: "#ddb53f", 
    fontSize: 24,
  },
  Title: {
    
  }
});
