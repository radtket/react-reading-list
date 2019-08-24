import client from "./api-client";

const create = listItemData => {
  return client("list-item", { body: listItemData });
};

const read = listItemIds => {
  if (!listItemIds.length) {
    return Promise.resolve({});
  }
  return client(
    `list-item?listItemIds=${encodeURIComponent(listItemIds.join(","))}`
  );
};

const update = (listItemId, updates) => {
  return client(`list-item/${listItemId}`, {
    method: "PUT",
    body: updates,
  });
};

const readForUser = ownerId => {
  return client(`list-item?ownerId=${encodeURIComponent(ownerId)}`);
};

const remove = listItemId => {
  return client(`list-item/${listItemId}`, { method: "DELETE" });
};

export { create, read, remove, readForUser, update };
