import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class fetchClass {
  constructor(baseUrl, timeOut = 10000) {
    this.instance = axios.create({
      baseUrl,
      timeOut,
    });
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}
