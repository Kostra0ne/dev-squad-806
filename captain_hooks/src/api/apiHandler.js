import axios from "axios";

export default class apiHandler {
  constructor(baseURL) {
    this.service = axios.create({
      baseURL: baseURL || process.env.baseURL,
    });
  }
  get(url) {
    return this.service.get(url);
  }
}
