export default class {
  constructor(element, APP) {
    this.element = element;
    this.page = document.documentElement;
    this.prefs = APP.methods.retrieve(APP, APP.data.settings);
    this.APP = APP;
  }

  init() {
    // Set the initial theme based on preferences
    this.setTheme(this.prefs.theme);

    // Set the select value to the current theme
    this.element.value = this.prefs.theme;

    // Add event listener to update theme on change
    this.element.addEventListener("change", (event) => {
      const newTheme = event.target.value;
      this.setTheme(newTheme);

      // Save the new theme to settings
      this.prefs.theme = newTheme;
      this.APP.methods.store(this.prefs);
    });
  }

  setTheme(theme) {
    // Remove any existing theme classes dynamically
    Array.from(this.element.options).forEach((option) => {
      this.page.classList.remove(`theme-${option.value}`);
    });

    // Add the new theme class
    this.page.classList.add(`theme-${theme}`);
  }
}
