import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export default instance;

export const API_KEY = "AIzaSyCjPOcAeWoHD2lmNTngEaur5UsyaqBJqu0";
