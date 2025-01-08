import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your !</Text>
      <View style={{ flexDirection: "row", gap: 10, padding: 20 }}>
        <Button title="Login" />
        <Button title="Register" />
      </View>
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
