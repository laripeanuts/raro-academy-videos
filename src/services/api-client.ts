import axios from "axios";

const axiosApiInstance = axios.create();
axiosApiInstance.defaults.baseURL = "https://3.221.159.196:3320";

axiosApiInstance.interceptors.request.use(
  async (config: any) => {
    config.url = `${axiosApiInstance.defaults.baseURL}${config.url}`;

    const authorization = localStorage.getItem("access_token");
    if (authorization) {
      config.headers.Authorization = `bearer ${authorization}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default axiosApiInstance;
