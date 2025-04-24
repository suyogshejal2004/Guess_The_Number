import{ View, Text, StyleSheet } from 'react-native';
function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}
export default NumberContainer;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#ddb53f",
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "#ddb53f",
    fontSize: 36,
    fontWeight: "bold",
  },
});