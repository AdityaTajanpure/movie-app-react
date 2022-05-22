import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://guvi-movie-app.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    } else {
      return response;
    }
  },
  (err) => {
    return err.response;
  }
);

export default axiosClient;
