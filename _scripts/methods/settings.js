export default (APP) => {
  const defaults = APP.methods.retrieve(APP, APP.data.settings);
  let page = document.querySelector("html");

  // Remove all previous mode-* and theme-* classes
  // page.classList.forEach((cls) => {
  //   if (cls.startsWith("mode-") || cls.startsWith("theme-")) {
  //     page.classList.remove(cls);
  //   }
  // });

  page.classList.add(`theme-${defaults.theme}`);
  page.classList.add(`mode-${defaults.mode}`);

  // Uncomment if font size customization is needed
  // page.style.setProperty("--font-size", defaults.fontSize);
};
