import axios from "axios";

const axiosWIthAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://ialkamal-be-amp.herokuapp.com/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default axiosWIthAuth;
