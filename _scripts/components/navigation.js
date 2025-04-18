export default class {
  constructor(element, APP) {
    this.element = element;
    this.APP = APP;
    this.page = document.documentElement;
  }

  init() {
    console.log("Navigation component initialized");
  }
}
