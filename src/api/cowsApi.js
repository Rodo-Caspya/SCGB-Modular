import axios from "axios";

const cowsApi = axios.create({
  baseURL: "https://back-end-modular.herokuapp.com/vacas",
  // baseURL: "http://localhost:9000/vacas",
});

export default cowsApi;
