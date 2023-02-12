function capitalize(string) {
  const firstLetter = string[0].toUpperCase();
  return `${firstLetter}${string.slice(1)}`;
}

function retrieveKeys(obj) {
  const keysArr = [];
  for (let key in obj) {
    keysArr.push(key);
  }
  return keysArr.sort();
}

export { retrieveKeys, capitalize };
