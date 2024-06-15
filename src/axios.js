import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-front-1372c.cloudfunctions.net/api",
  
  // "http://127.0.0.1:5001/front-1372c/us-central1/api",

  // "https://us-central1-aug-bc35b.cloudfunctions.net/api",
});

export default instance;
