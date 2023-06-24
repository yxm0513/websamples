import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-f0ff8.firebaseio.com/"
});

export default instance;
