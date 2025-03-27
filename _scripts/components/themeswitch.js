export default class {
  constructor(element, APP) {
    this.element = element;
    this.page = document.documentElement;
    this.prefs = APP.methods.retrieve(APP, APP.data.settings);
    this.APP = APP;
    this.radioButtons = this.element.querySelectorAll(
      'input[type="radio"][name="theme"]'
    );
  }

  init() {
    // Set the initial theme based on preferences
    this.setTheme(this.prefs.theme);

    // Check the radio button that matches the current theme
    this.radioButtons.forEach((radio) => {
      if (radio.value === this.prefs.theme) {
        radio.checked = true;
      }

      // Add event listener to update theme on change
      radio.addEventListener("change", (event) => {
        const newTheme = event.target.value;
        this.setTheme(newTheme);

        // Save the new theme to settings
        this.prefs.theme = newTheme;
        this.APP.methods.store(this.prefs);
      });
    });
  }

  setTheme(theme) {
    // Remove any existing theme classes
    this.page.classList.remove("theme-light", "theme-dark", "theme-system");

    // Add the new theme class
    this.page.classList.add(`theme-${theme}`);
  }
}
