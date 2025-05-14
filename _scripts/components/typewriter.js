export default class {
  constructor(element, APP) {
    this.element = element;
    this.text = this.element.textContent;
    this.index = 0;
    this.typing = false;
    this.scrolltrigger = new APP.components.scrolltrigger(element, APP);
  }

  init() {
    this.element.textContent = "";
    this.scrolltrigger.init();

    if (this.scrolltrigger.init() && !this.typing) {
      this.type();
    }
  }

  type() {
    if (this.index < this.text.length) {
      this.typing = true;
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      this.element.classList.add("is-typing");

      https: setTimeout(() => this.type(), 100);
    } else {
      this.typing = false;
      this.element.classList.remove("is-typing");
    }
  }
}
