import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(null); // State to store data
  const [isLoading, setIsLoading] = useState(false); // State for loading

  // Function to fetch data from the backend
  const fetchData = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.get(
        "http://192.168.2.146:8080/v1/setup/login"
      ); // Replace with your endpoint
      setData(response.data); // Save response data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <View style={styles.container}>
      <Text>Simple API Fetch Example</Text>
      <View style={{ flexDirection: "row", gap: 10, padding: 20 }}>
        <Button title="Fetch Data" onPress={fetchData} />
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
