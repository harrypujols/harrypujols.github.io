export default class {
  constructor(element, APP) {
    this.element = element;
    this.APP = APP;
    this.scroll = APP.methods.scrollstop;
    this.links = this.element.querySelectorAll(".js-nav-link");
    this.isInViewport = APP.methods.isInViewport; // Use the refactored isInViewport
  }

  // async makeActive() {
  //   for (const link of this.links) {
  //     const target = document.querySelector(link.getAttribute("href"));
  //     if (target) {
  //       const isVisible = await this.isInViewport(target);
  //       if (isVisible) {
  //         link.classList.add("is-active");
  //       } else {
  //         link.classList.remove("is-active");
  //       }
  //     }
  //   }
  // }

  async isVisible() {
    const targetSelector = document.querySelector("#intro");

    if (targetSelector) {
      const isVisible = await this.isInViewport(targetSelector);
      if (!isVisible) {
        this.element.classList.add("is-visible");
      } else {
        this.element.classList.remove("is-visible");
      }
    }
  }

  init() {
    // Run makeActive and isVisible on initialization
    // this.makeActive();
    this.isVisible();

    // Run makeActive and isVisible on scroll
    this.scroll(() => {
      // this.makeActive();
      this.isVisible();
    }, 45);
  }
}
