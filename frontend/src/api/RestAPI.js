import axios from "axios";

export default axios.create({
  // baseURL: "http://127.0.0.1:8000/",
  // baseURL: "https://swapi.py4e.com/api/",
  baseURL: "http://localhost:8000/api/",
  auth: {
    username: "rajesh",
    password: "******",
  },
});
