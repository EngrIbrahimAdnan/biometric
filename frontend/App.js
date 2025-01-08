import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { loginBiometric, signupBiometric } from "./api/biometric";

import * as LocalAuthentication from "expo-local-authentication";

const authenticate = async () => {
  const result = await LocalAuthentication.authenticateAsync();
  if (result.success) {
    console.log("Fingerprint Authentication successful");
  } else {
    console.log("Fingerprint Authentication failed");
  }
};

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

  const reset = () => {
    setData(null);
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
      <View style={{ flexDirection: "row", gap: 10, padding: 10 }}>
        <Button title="Login with biometrics" onPress={authenticate} />
      </View>
      <View style={{ flexDirection: "row", gap: 10, padding: 10 }}>
        <Button title="register" onPress={handleSignup} />
      </View>

      {isLoading && <Text>Loading...</Text>}
      {data && (
        <View style={{ flexDirection: "row", gap: 10, padding: 10 }}>
          <Text>{data}</Text>
        </View>
      )}
      <Button title="reset" onPress={reset} />
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
