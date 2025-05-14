export default class {
  constructor(element, APP) {
    this.element = element;
    this.page = document.documentElement;
    this.inputs = this.element.querySelectorAll(
      'input[type="radio"][name="mode"]'
    );
    this.prefs = APP.methods.retrieve(APP, APP.data.settings);
    this.APP = APP;
  }

  init() {
    // Remove all mode-* classes before setting
    this.page.classList.remove("mode-light", "mode-system", "mode-dark");
    this.page.classList.add(`mode-${this.prefs.mode}`);

    // Set the checked radio based on the stored preferences
    this.inputs.forEach((input) => {
      input.checked = input.value === this.prefs.mode;
    });

    // Add event listener to each radio button
    this.inputs.forEach((input) => {
      input.addEventListener("change", (event) => {
        if (event.target.checked) {
          const mode = event.target.value;

          // Update the settings object
          this.prefs.mode = mode;

          // Save the updated settings using the store method
          this.APP.methods.store(this.prefs);

          // Update the page class
          this.page.classList.remove("mode-light", "mode-system", "mode-dark");
          this.page.classList.add(`mode-${mode}`);
        }
      });
    });
  }
}
