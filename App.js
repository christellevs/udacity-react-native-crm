import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/screens/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
