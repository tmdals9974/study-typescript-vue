import { AxiosInstance } from "axios";
import store from "../../store";

function setRequestOptions(instance: AxiosInstance) {
  instance.interceptors.request.use(
    config => {
      const token = store.getters["auth/token"];
      if (!config.headers) throw "no headers";
      config.headers.Authorization = token;
      return config;
    },
    error => {
      const token = error.response.headers.authorization;
      store.commit("SET_TOKEN", token);
      return Promise.reject(error.response);
    },
  );
}

function setResponseOptions(instance: AxiosInstance) {
  instance.interceptors.response.use(
    config => {
      const token = config.headers.authorization;
      store.commit("SET_TOKEN", token);
      return config;
    },
    error => {
      const token = error.response.headers.authorization;
      store.commit("SET_TOKEN", token);
      return Promise.reject(error.response);
    },
  );
}

export { setRequestOptions, setResponseOptions };
