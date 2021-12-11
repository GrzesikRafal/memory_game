import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: 'https://memory-game-5514b-default-rtdb.europe-west1.firebasedatabase.app/',
  });