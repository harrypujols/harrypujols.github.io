export default class {
  constructor(element, APP) {
    this.element = element;
    this.entries = this.element.querySelectorAll(".entry");
    this.scroll = APP.methods.scrollstop;
  }

  isInViewport() {
    const observer = new IntersectionObserver((this.entries) => {
      this.entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in-viewport");
          // observer.unobserve(entry.target);
          return true
        } else {
          entry.target.classList.remove("is-in-viewport");
          return false
        }
      });
    }
  }

  init() {
    this.isInViewport();

    this.scroll(() => {
      this.isInViewport();
    });
  }
}
