export default class {
  constructor(element, APP) {
    this.element = element;
    this.openButton = this.element.querySelector("js-hamburger-button");
    this.menu = this.element.querySelector("js-navigation-menu");
  }

  init() {
    console.log("Navigation component initialized");
  }
}
