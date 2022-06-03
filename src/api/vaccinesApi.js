import axios from "axios";

const vaccinesApi = axios.create({
  // baseURL: "https://back-end-modular.herokuapp.com/vacas",
  baseURL: "http://localhost:9000/vacunas",
});

export default vaccinesApi;
