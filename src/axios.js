import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// instance.get('/query1')   --> 'https://api.themoviedb.org/3/query1'

export default instance;
