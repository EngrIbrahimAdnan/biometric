import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.2.146:8080/v1/setup",
  timeout: 5000, // Optional: Add timeout to handle slow requests
});
export default instance;
