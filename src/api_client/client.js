import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://git.heroku.com/guvi-movie-app.git/",
  headers: {
    "Content-Type": "application/json",
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
