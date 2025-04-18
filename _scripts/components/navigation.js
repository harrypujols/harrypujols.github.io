export default class {
  constructor(element, APP) {
    this.element = element;
    this.APP = APP;
    this.scroll = APP.methods.scrollstop;
    this.link = this.element.querySelectorAll(".js-nav-link");
    this.isinviewport = APP.methods.isinviewport;
  }

  makeActive() {
    this.link.forEach((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      const isActive = this.isinviewport.isInViewport(target);

      if (isActive) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  isvisible() {
    const isActive = this.isinviewport.isInViewport(target);

    if (isActive.id != "intro") {
      this.element.classList.add("is-visible");
    } else {
      this.element.classList.remove("is-visible");
    }
  }

  init() {
    this.makeActive();

    this.scroll(() => {
      this.makeActive();
    }, 45);
  }
}
