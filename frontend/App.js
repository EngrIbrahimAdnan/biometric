import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { loginBiometric, signupBiometric } from "./api/biometric";

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Wrapper to handle login request
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await loginBiometric();
      setData(response); // Save the response data
    } catch (error) {
      console.error("Error fetching login:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Wrapper to handle signup request
  const handleSignup = async () => {
    setIsLoading(true);
    try {
      const response = await signupBiometric();
      setData(response); // Save the response data
    } catch (error) {
      console.error("Error fetching signup:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>API Fetch Example</Text>
      <View style={{ flexDirection: "row", gap: 10, padding: 20 }}>
        <Button title="Login" onPress={handleLogin} />
        <Button title="Signup" onPress={handleSignup} />
      </View>
      {isLoading && <Text>Loading...</Text>}
      {data && (
        <View style={{ marginTop: 20 }}>
          <Text>Received Data:</Text>
          <Text>{data}</Text>
        </View>
      )}
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
