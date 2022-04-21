import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://back-end-modular.herokuapp.com/users",
});

export default usersApi;
