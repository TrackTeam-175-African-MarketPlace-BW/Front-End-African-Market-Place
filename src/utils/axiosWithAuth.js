import axios from "axios";

const axiosWIthAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://ialkamal-be-amp.herokuapp.com",
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWIthAuth;
