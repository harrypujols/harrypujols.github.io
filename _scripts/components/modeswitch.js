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
    this.page.classList.add(this.prefs.mode);

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
          mode = "system";
      }

      // Update the settings object
      this.prefs.mode = mode;

      // Save the updated settings using the store method
      this.APP.methods.store(this.prefs);

      // Update the page class
      this.page.classList.remove("light", "system", "dark");
      this.page.classList.add(mode);
    });
  }
}
