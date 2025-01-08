import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.2.146:8080/v1/setup",
});
export default instance;
