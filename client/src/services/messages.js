const axios = require("axios");
const BASE_URl = "https://dans-chat-app.herokuapp.com";

const getMessages = async () => {
  const resp = await axios.get(`${BASE_URl}/messages`);
  console.log(resp.data);
  return resp.data;
};

const postMessage = async message => {
  const resp = await axios.post(`${BASE_URl}/messages`, message);
  console.log(resp.data);
  return resp.data;
};

export { getMessages, postMessage };
