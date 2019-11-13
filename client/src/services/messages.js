const axios = require("axios");
const BASE_URl = "http://localhost:8080";

const postMessage = async message => {
  const resp = await axios.post(`${BASE_URl}/messages`, message);
  console.log(resp.data);
  return resp.data;
};

export { postMessage };
