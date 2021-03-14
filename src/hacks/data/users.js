import { usersKey, siteKey } from "../../utils/constants";
import { hash } from "../../utils/helpers";

// istanbul ignore file
const users = {};
const persist = () =>
  window.localStorage.setItem(usersKey, JSON.stringify(users));
const load = () =>
  Object.assign(users, JSON.parse(window.localStorage.getItem(usersKey)));

// initialize
try {
  load();
} catch (error) {
  persist();
  // ignore json parse error
}

const validateUser = id => {
  load();
  if (!users[id]) {
    throw new Error(`No user with the id "${id}"`);
  }
};

// this would be called `delete` except that's a reserved word in JS :-(
const remove = id => {
  validateUser(id);
  delete users[id];
  persist();
};

window[siteKey] = window[siteKey] || {};
window[siteKey].purgeUsers = () => {
  Object.keys(users).forEach(key => {
    delete users[key];
  });
  persist();
};

const authenticate = ({ username, password }) => {
  const id = hash(username);
  const user = users[id] || {};
  if (user.passwordHash === hash(password)) {
    return { ...user, token: btoa(user.id) };
  }
  throw new Error("Invalid username or password");
};

const create = ({ username, password }) => {
  const id = hash(username);
  const passwordHash = hash(password);
  if (users[id]) {
    throw new Error(`Cannot create a new user with the username "${username}"`);
  }
  users[id] = { id, username, passwordHash };
  persist();
};

const read = id => {
  validateUser(id);
  const { passwordHash, ...user } = users[id];
  return user;
};

const update = (id, updates) => {
  validateUser(id);
  Object.assign(users[id], updates);
  persist();
  return read(id);
};

export { authenticate, create, read, update, remove };
