import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketmovies-5gr4.onrender.com",
})