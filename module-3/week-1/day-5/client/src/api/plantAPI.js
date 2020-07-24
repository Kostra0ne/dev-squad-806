import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/plants",
});

export default {
  service,

  getAll() {
    return service.get("/");
  },

  getOne(id) {
    return service.get(`/${id}`);
  },

  updateOne(id, data) {
    return service.patch(`/${id}`, data);
  },

  createOne(data) {
    return service.post("/", data);
  },

  delete(id) {
    return service.delete(`/${id}`);
  },
};
