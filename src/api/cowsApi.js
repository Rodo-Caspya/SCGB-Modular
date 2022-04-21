import axios from "axios";

const cowsApi = axios.create({
  baseURL: "http://localhost:9000/vacas",
});

export default cowsApi;
