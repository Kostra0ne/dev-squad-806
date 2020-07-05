const service = axios.create({
  baseURL: "http://localhost:9999"
});

// console.log(service);
// service is an axios instance
// you will use it to interact with the backend in AJAX
// with the get/post/delete/patch/put verbs ....

export default service;
