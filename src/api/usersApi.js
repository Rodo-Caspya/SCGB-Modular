import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://localhost:9000/users",
});

export default usersApi;
