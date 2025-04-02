export default class {
  constructor(element, APP) {
    this.element = element;
    this.scroll = APP.methods.scrollstop;
  }

  isInViewport() {
    const rect = this.element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  toggleClass() {
    if (this.isInViewport()) {
      this.element.classList.add("is-in-viewport");
    } else {
      this.element.classList.remove("is-in-viewport");
    }
  }

  init() {
    this.toggleClass();
    this.scroll(() => {
      this.toggleClass();
    });
  }
}
