import client from "./api-client";

function create(listItemData) {
  return client("list-item", { body: listItemData });
}

function read(listItemIds) {
  if (!listItemIds.length) {
    return Promise.resolve({});
  }
  return client(
    `list-item?listItemIds=${encodeURIComponent(listItemIds.join(","))}`
  );
}

function update(listItemId, updates) {
  return client(`list-item/${listItemId}`, {
    method: "PUT",
    body: updates,
  });
}

function readForUser(ownerId) {
  return client(`list-item?ownerId=${encodeURIComponent(ownerId)}`);
}

function remove(listItemId) {
  return client(`list-item/${listItemId}`, { method: "DELETE" });
}

export { create, read, remove, readForUser, update };
