export default class {
  constructor(element, APP) {
    this.element = element;
    this.page = document.documentElement;
    this.inputs = document.getElementsByName("mode-switch");
    this.prefs = APP.methods.retrieve(APP, APP.data.settings);
    this.APP = APP;
  }

  init() {
    // Set initial mode based on preferences
    this.page.classList.add(`mode-${this.prefs.mode}`);

    // Set the range input value based on the stored preferences
    switch (this.prefs.mode) {
      case "light":
        this.element.value = "1";
        break;
      case "system":
        this.element.value = "2";
        break;
      case "dark":
        this.element.value = "3";
        break;
      default:
        this.element.value = "1";
    }

    // Add event listener to the range input field
    this.element.addEventListener("input", (event) => {
      let mode;
      switch (event.target.value) {
        case "1":
          mode = "light";
          break;
        case "2":
          mode = "system";
          break;
        case "3":
          mode = "dark";
          break;
        default:
          mode = "light";
      }

      // Update the settings object
      this.prefs.mode = mode;

      // Save the updated settings using the store method
      this.APP.methods.store(this.prefs);

      // Update the page class
      this.page.classList.remove("mode-light", "mode-system", "mode-dark");
      this.page.classList.add(`mode-${mode}`);
    });
  }
}
