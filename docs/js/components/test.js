export default class {
  constructor(element, APP) {
    this.element = element;
    this.APP = APP;
    this.data = APP.data;
  }

  init() {
    console.log("app.components.test initialized");
    console.log("Element:", this.element);
    console.log("APP:", this.APP);
  }
}
