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

  init() {
    this.scroll(() => {
      this.isInViewport();
    });
  }
}
