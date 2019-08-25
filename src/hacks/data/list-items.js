/* eslint-disable no-underscore-dangle */
// istanbul ignore file
const listItemsKey = "__bookshelf_list_items__";
const listItems = {};
const persist = () =>
  window.localStorage.setItem(listItemsKey, JSON.stringify(listItems));
const load = () =>
  Object.assign(
    listItems,
    JSON.parse(window.localStorage.getItem(listItemsKey))
  );

// initialize
try {
  load();
} catch (error) {
  persist();
  // ignore json parse error
}

window.__bookshelf = window.__bookshelf || {};
window.__bookshelf.purgeListItems = () => {
  Object.keys(listItems).forEach(key => {
    delete listItems[key];
  });
  persist();
};

const authorize = (userId, listItemId) => {
  const listItem = read(listItemId);
  if (listItem.ownerId !== userId) {
    throw new Error("User is not authorized to view that list");
  }
};

const create = ({
  bookId = required("bookId"),
  ownerId = required("ownerId"),
  rating = -1,
  notes = "",
  startDate = Date.now(),
  finishDate = null,
}) => {
  const id = hash(`${bookId}${ownerId}`);
  if (listItems[id]) {
    throw new Error(`This user cannot create new list item for that book`);
  }
  listItems[id] = { id, bookId, ownerId, rating, notes, finishDate, startDate };
  persist();
  return read(id);
};

const read = id => {
  validateListItem(id);
  return listItems[id];
};

const update = (id, updates) => {
  validateListItem(id);
  Object.assign(listItems[id], updates);
  persist();
  return read(id);
};

// this would be called `delete` except that's a reserved word in JS :-(
const remove = id => {
  validateListItem(id);
  delete listItems[id];
  persist();
};

const readMany = (userId, listItemIds) => {
  return listItemIds.map(id => {
    authorize(userId, id);
    return read(id);
  });
};

const readByOwner = userId => {
  return Object.values(listItems).filter(li => li.ownerId === userId);
};

const validateListItem = id => {
  load();
  if (!listItems[id]) {
    throw new Error(`No list item with the id "${id}"`);
  }
};

const hash = str => {
  let hash = 5381;
  let i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return String(hash >>> 0);
};

const required = key => {
  return () => {
    throw new Error(`${key} is required`);
  };
};

export { authorize, create, read, update, remove, readMany, readByOwner };
