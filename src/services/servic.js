import axios from "axios";

const url_data = "http://localhost:9000";

export const getAllProducts = () => {
  const url = `${url_data}/product`;
  return axios.get(url);
};
export const getProduct = (shopId) => {
  const url = `${url_data}/product/${shopId}`;
  return axios.get(url);
};
export const getAllCommentProducts = () => {
  const url = `${url_data}/commentProducts`;
  return axios.get(url);
};
export const addNewCommentProducts = (data) => {
  const url = `${url_data}/commentProducts`;
  return axios.post(url, data);
};
export const replyCommentProducts = (data , path) => {
  const url = `${url_data}/commentProducts/${path}`;
  return axios.put(url, data);
};
export const deleteCommentProducts = (path) => {
  const url = `${url_data}/commentProducts/${path}`;
  return axios.delete(url);
};

export const getAllUsers = () => {
  const url = `${url_data}/profiles`;
  return axios.get(url);
};
export const addNewUser = (data) => {
  const url = `${url_data}/profiles`;
  return axios.post(url, data);
};
