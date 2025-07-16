import { Text, View, StyleSheet } from "react-native";

const StylesheetData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is stylesheet data
      </Text>

      <View>
        <Text style={styles.subText}>React Native</Text>
      </View>
    </View>
  );
};

export default StylesheetData;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    marginTop:400
  },
  text: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold"
  },
  subText: {
    fontSize: 16,
    marginTop: 10
  }
});
