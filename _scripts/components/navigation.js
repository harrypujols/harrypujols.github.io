export default class {
  constructor(element, APP) {
    this.element = element;
    this.openButton = this.element.querySelector(".js-hamburger-button");
    this.menu = this.element.querySelector(".js-navigation-menu");
  }

  toggle() {
    this.element.addEventListener("click", (event) => {
      console.log(event.target);
      if (event.target.closest(".js-hamburger-button")) {
        event.preventDefault();
        console.log("Hamburger button clicked");
        this.menu.classList.toggle("is-open");
        this.menu.setAttribute(
          "aria-expanded",
          !this.menu.classList.contains("is-open")
        );
      }
    });
  }

  init() {
    console.log("Navigation component initialized");
    this.toggle();
  }
}
