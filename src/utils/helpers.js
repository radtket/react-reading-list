export const slugify = str => str.replace(/\s+/g, "-").toLowerCase();

export const isObjectEmpty = myObject => {
  return !Object.keys(myObject).length;
};

export const isArrayEmpty = arrayArg => {
  if (arrayArg && arrayArg.length) {
    return false;
  }
  return true;
};

export const hash = str => {
  let h = 5381;
  let i = str.length;

  while (i) {
    h = (h * 33) ^ str.charCodeAt(--i);
  }
  return String(h >>> 0);
};
