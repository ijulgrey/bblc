import axios from "axios";

export const SERVER_API_DEV = process.env.SERVER_API_DEV;
export const SERVER_API_PROD = process.env.SERVER_API_PROD;

const request = axios.create({
  baseURL: `${SERVER_API_DEV}`,
  timeout: 30000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export { request };
