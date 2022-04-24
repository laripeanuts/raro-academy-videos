import axios from "axios";
import { getLocalUserStorage } from "../utils/getLocalUserStorage";

const axiosApiInstance = axios.create();
axiosApiInstance.defaults.baseURL = "https://3.221.159.196:3320";

axiosApiInstance.interceptors.request.use(
  async (config: any) => {
    config.url = `${axiosApiInstance.defaults.baseURL}${config.url}`;
    const thereIsUser = getLocalUserStorage();
    const userToken = thereIsUser?.access_token;
    const authorization = userToken;
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
