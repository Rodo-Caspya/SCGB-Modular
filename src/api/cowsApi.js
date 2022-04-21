import axios from "axios";

const cowsApi = axios.create({
  baseURL: "https://back-end-modular.herokuapp.com/vacas",
});

export default cowsApi;
