import { View, Text, StyleSheet ,Image, Button} from "react-native";
import PrimaryBUttoun from "../components/primaryButton";
import Title from "../components/title";
import NumberContainer from "../components/game/NumberContainer";

function GameOverScreen({ userNumber,onRestart, rounds}) {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <Image style={styles.Image} source={require("../assets/success.png")} />
      <View>
        <Text style={styles.NormalTExt}>
          Your Phone needed <Text style={styles.text}>{rounds}</Text>{" "}
          <Text>rounds</Text> <Text>to guess the number </Text>{" "}
          <Text style={styles.text}>{userNumber}</Text>
        </Text>
      </View>

      <PrimaryBUttoun style={styles.Button} onPress={onRestart}>
        Play Again
      </PrimaryBUttoun>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ddb53f",
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    color: "#73002c",
    paddingVertical: 10,
    
   
    
    fontWeight: "bold",
   
  },
  Image: {
    width: 300,
    height: 300,
    marginVertical: 20,
    borderRadius: 150,
  },
  NormalTExt:{
    fontSize: 24,
    color: "#090909",
    textAlign : "center",
    marginVertical: 20,
  },
  Button:{

  }
});
