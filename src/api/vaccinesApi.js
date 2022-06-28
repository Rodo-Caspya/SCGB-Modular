import axios from "axios";

const vaccinesApi = axios.create({
  baseURL: "https://back-end-modular.herokuapp.com/vacunas",
});

export default vaccinesApi;
