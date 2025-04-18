export default class {
  constructor(element, APP) {
    this.element = element;
    this.scroll = APP.methods.scrollstop;
    this.selector = this.element.dataset.selector || "entry";
    this.entries = this.element.querySelectorAll(`.${this.selector}`);
  }

  isInViewport() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`${entry.className} is in the viewport: true`);
        } else {
          console.log(`${entry.className} is in the viewport: false`);
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
    }, 45);
  }
}
