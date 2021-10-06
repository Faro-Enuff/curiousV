import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axios;
