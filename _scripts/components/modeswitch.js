export default class {
  constructor(element, APP) {
    this.element = element;
    this.page = document.documentElement;
    this.inputs = document.getElementsByName("mode-switch");
    this.prefs = { theme: "system" };
  }

  switch() {
    this.element.addEventListener("click", (event) => {
      this.inputs.forEach((input) => {
        if (input !== event.target) {
          input.checked = false;
        }
      });

      if (event.target.checked === true) {
        this.prefs.theme = event.target.value;
      } else {
        this.prefs.theme = "system";
      }

      this.page.className = "";
      this.page.classList.add(this.prefs.theme);
      localStorage.setItem("prefs", JSON.stringify(this.prefs.theme));
    });
  }

  store() {
    var retrieve = localStorage.getItem("prefs");

    if (retrieve == null || retrieve == "undefined") {
      localStorage.setItem("prefs", JSON.stringify(this.prefs));
    } else {
      this.prefs = JSON.parse(retrieve);
      console.log(this.prefs);
    }

    if (this.inputs.length > 0) {
      this.inputs.forEach((input) => {
        if (input.value === this.prefs.theme) {
          input.checked = true;
        }
      });
    }

    this.page.className = "";
    this.page.classList.add(this.prefs.theme);
  }

  init() {
    this.store();

    if (this.inputs.length > 0) {
      this.switch();
    }
  }
}
