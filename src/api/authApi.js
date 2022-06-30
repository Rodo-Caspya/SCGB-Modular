import axios from "axios";

const authApi = axios.create({
  // baseURL: "https://back-end-modular.herokuapp.com/users",
  baseURL: "http://localhost:9000/users",
});

export default authApi;
