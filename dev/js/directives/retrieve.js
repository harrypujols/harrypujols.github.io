export default (file) => {
  return fetch(file).then((response) => response.json());
};
