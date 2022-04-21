import axios from "axios";

const authApi = axios.create({
  baseURL: "https://back-end-modular.herokuapp.com/users",
});

export default authApi;
