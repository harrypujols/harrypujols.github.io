export default class {
  constructor(element, APP) {
    this.element = element;
    this.page = document.documentElement;
    this.inputs = document.getElementsByName("mode-switch");
    this.prefs = "system";
  }

  switch() {
    this.element.addEventListener("click", (event) => {
      this.inputs.forEach((input) => {
        if (input !== event.target) {
          input.checked = false;
        }
      });

      if (event.target.checked === true) {
        this.prefs = event.target.value;
      } else {
        this.prefs = "system";
      }

      this.page.className = "";
      this.page.classList.add(this.prefs);
      localStorage.setItem("prefs", JSON.stringify(this.prefs));
    });
  }

  store() {
    var retrieve = localStorage.getItem("prefs");

    if (retrieve == null || retrieve == "undefined") {
      localStorage.setItem("prefs", JSON.stringify(this.prefs));
    } else {
      this.prefs = JSON.parse(retrieve);
    }

    if (this.inputs.length > 0) {
      this.inputs.forEach((input) => {
        if (input.value === this.prefs) {
          input.checked = true;
        }
      });
    }

    this.page.className = "";
    console.log(this.prefs);
    this.page.classList.add(this.prefs);
  }

  init() {
    this.store();

    if (this.inputs.length > 0) {
      this.switch();
    }
  }
}
