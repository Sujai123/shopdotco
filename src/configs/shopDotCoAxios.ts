import axios from "axios";

const shopDotCoAxios = axios.create({
  baseURL: "https://73551476-e016-4b52-b281-49c168b6cae2.mock.pstmn.io/api/",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export default shopDotCoAxios;
