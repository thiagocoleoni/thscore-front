import axios from "axios";

const Api = axios.create({
  baseURL: "https://thscore-api.herokuapp.com"
});

export default Api;