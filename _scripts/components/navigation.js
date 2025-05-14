export default class {
  constructor(element, APP) {
    this.element = element;
    this.openButton = this.element.querySelector(".js-hamburger-button");
    this.menu = this.element.querySelector(".js-navigation-menu");
    this.isinViewport = APP.methods.isInViewport;
    this.scrollstop = APP.methods.scrollstop;
    this.resizestop = APP.methods.resizestop;
  }

  toggle() {
    this.element.addEventListener("click", (event) => {
      if (event.target.closest(".js-hamburger-button")) {
        event.preventDefault();
        this.element.classList.toggle("is-open");
        this.menu.classList.toggle("is-open");
        this.menu.setAttribute(
          "aria-expanded",
          this.menu.classList.contains("is-open")
        );
        // Prevent background scroll when menu is open, but preserve scroll position
        if (this.menu.classList.contains("is-open")) {
          this._scrollY = window.scrollY;
          document.body.classList.add("nav-open");
          document.body.style.top = `-${this._scrollY}px`;
        } else {
          document.body.classList.remove("nav-open");
          document.body.style.top = "";
          window.scrollTo(0, this._scrollY || 0);
        }
      }

      if (event.target.closest(".js-navigation-menu a")) {
        this.element.classList.remove("is-open");
        this.menu.classList.remove("is-open");
        this.menu.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
        document.body.style.top = "";
        window.scrollTo(0, this._scrollY || 0);
      }
    });
  }

  toggleOpenButtonClass() {
    const intro = document.getElementById("intro");
    if (!intro || !this.openButton) return;
    this.isinViewport(intro).then((inView) => {
      if (inView) {
        this.openButton.classList.add("is-in-reverse");
      } else {
        this.openButton.classList.remove("is-in-reverse");
      }
    });
  }

  init() {
    this.toggle();
    this.toggleOpenButtonClass();
    this.scrollstop(() => this.toggleOpenButtonClass());
    this.resizestop(() => this.toggleOpenButtonClass());
  }
}
