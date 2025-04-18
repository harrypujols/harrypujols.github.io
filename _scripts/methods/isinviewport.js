export default class {
  constructor(element, APP) {
    this.element = element;
    this.selector = this.element.dataset.selector || "entry";
    this.entries = this.element.querySelectorAll(`.${this.selector}`);
    this.scroll = APP.methods.scrollstop;
  }

  isInViewport() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in-viewport");
        } else {
          entry.target.classList.remove("is-in-viewport");
        }
      });
    });

    // Observe each entry
    this.entries.forEach((entry) => {
      observer.observe(entry);
    });
  }

  init() {
    this.isInViewport();

    this.scroll(() => {
      this.isInViewport();
    });
  }
}
