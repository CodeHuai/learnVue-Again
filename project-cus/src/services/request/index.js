import axios from "axios";
import { timeout, baseURL } from "./config";

class fetchClass {
  constructor(baseURL, TIMEOUT = 10000) {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: TIMEOUT,
    });
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new fetchClass(baseURL, timeout);
