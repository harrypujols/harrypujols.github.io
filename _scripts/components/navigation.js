export default class {
  constructor(element, APP) {
    this.element = element;
    this.APP = APP;
    this.scroll = APP.methods.scrollstop;
    this.links = this.element.querySelectorAll(".js-nav-link");
    this.isinviewport = new APP.methods.isinviewport(
      document.querySelector('[data-js="isinviewport"]'),
      APP
    ); // Initialize isinviewport
  }

  makeActive() {
    this.links.forEach((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target && this.isinviewport.isInViewport(target)) {
        link.classList.add("is-active");
      } else {
        link.classList.remove("is-active");
      }
    });
  }

  isVisible() {
    const targetSelector = document.querySelector("#intro");

    if (targetSelector && !this.isinviewport.isInViewport(targetSelector)) {
      this.element.classList.add("is-visible");
    } else {
      this.element.classList.remove("is-visible");
    }
  }

  init() {
    // Run makeActive and isVisible on initialization
    this.makeActive();
    this.isVisible();

    // Run makeActive and isVisible on scroll
    this.scroll(() => {
      this.makeActive();
      this.isVisible();
    }, 45);
  }
}
