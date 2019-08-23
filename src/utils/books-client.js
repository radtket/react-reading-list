import client from "./api-client";

const search = query => {
  return client(`book?query=${encodeURIComponent(query)}`);
};

const read = bookId => {
  return client(`book/${bookId}`);
};

export { search, read };
