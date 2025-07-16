import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#e6f2ff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007acc",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    alignItems: "center",
    width: "90%",
  },
  heading: {
    fontSize: 20,
    color: "#333",
    marginBottom: 10,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
});

export default styles;
