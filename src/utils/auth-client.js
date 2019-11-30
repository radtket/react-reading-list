import client from "./api-client";
import { localStorageKey } from "./constants";

const handleUserResponse = ({ user: { token, ...user } }) => {
  window.localStorage.setItem(localStorageKey, token);
  return user;
};

const logout = () => {
  window.localStorage.removeItem(localStorageKey);
  return Promise.resolve();
};

const getToken = () => {
  return window.localStorage.getItem(localStorageKey);
};

const getUser = () => {
  const token = getToken();

  if (!token) {
    return Promise.resolve(null);
  }

  return client("me").catch(error => {
    logout();
    return Promise.reject(error);
  });
};

const login = ({ username, password }) => {
  return client("login", { body: { username, password } }).then(
    handleUserResponse
  );
};

const register = ({ username, password }) => {
  return client("register", { body: { username, password } }).then(
    handleUserResponse
  );
};

export { login, register, logout, getToken, getUser };
