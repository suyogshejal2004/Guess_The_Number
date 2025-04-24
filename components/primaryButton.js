import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.borderOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.borderInnerContainer, styles.pressed]
            : styles.borderInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#4e072a" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  borderOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  borderInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontFamily: "sans-serif",
  },
  pressed: {
    opacity: 0.75,
  },
});
