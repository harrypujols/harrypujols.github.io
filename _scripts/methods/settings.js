export default (APP) => {
  const defaults = APP.methods.retrieve(APP, APP.data.settings);
  let page = document.querySelector("html");
  page.classList.add(defaults.theme);
  page.classList.add(defaults.mode);
  // page.style.setProperty("--font-size", defaults.fontSize);
};
