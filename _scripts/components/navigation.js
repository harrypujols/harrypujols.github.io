export default class {
  constructor(element, APP) {
    this.element = element;
    this.openButton = this.element.querySelector(".js-hamburger-button");
    this.menu = this.element.querySelector(".js-navigation-menu");
    this.isinViewport = APP.methods.isInViewport;
  }

  toggle() {
    this.element.addEventListener("click", (event) => {
      console.log(event.target);
      if (event.target.closest(".js-hamburger-button")) {
        event.preventDefault();
        console.log("Hamburger button clicked");
        this.element.classList.toggle("is-open");
        this.menu.setAttribute(
          "aria-expanded",
          !this.element.classList.contains("is-open")
        );
      }
    });
  }

  toggleOpenButtonClass() {
    const intro = document.getElementById("intro");
    if (!intro || !this.openButton) return;
    this.isinViewport(intro).then((inView) => {
      if (inView) {
        this.openButton.classList.add("is-in-viewport");
      } else {
        this.openButton.classList.remove("is-in-viewport");
      }
    });
  }

  init() {
    console.log("Navigation component initialized");
    this.toggle();
    // Toggle class on load
    this.toggleOpenButtonClass();
    // Listen for scroll and resize to update class
    window.addEventListener("scroll", () => this.toggleOpenButtonClass());
    window.addEventListener("resize", () => this.toggleOpenButtonClass());
  }
}
