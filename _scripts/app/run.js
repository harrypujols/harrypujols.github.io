export default (APP) => {
  document.addEventListener("DOMContentLoaded", () => {
    APP.methods.components(APP);
    APP.methods.settings(APP);
  });
};
