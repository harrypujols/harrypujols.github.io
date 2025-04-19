export default class {
  constructor(element, APP) {
    this.element = element;
    this.scroll = APP.methods.scrollstop;
    this.isInViewport = APP.methods.isInViewport;
    this.links = this.element.querySelectorAll(".js-nav-link");
    this.intro = document.querySelector("#intro");
  }

  async makeActive() {
    for (const link of this.links) {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        const isVisible = await this.isInViewport(target);
        if (isVisible) {
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      }
    }
  }

  async isVisible() {
    if (this.intro) {
      const isVisible = await this.isInViewport(this.intro);
      if (!isVisible) {
        this.element.classList.add("is-visible");
      } else {
        this.element.classList.remove("is-visible");
      }
    }
  }

  init() {
    // this.makeActive();
    this.isVisible();

    this.scroll(() => {
      this.makeActive();
      this.isVisible();
    }, 15);
  }
}
