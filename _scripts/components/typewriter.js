export default class {
  constructor(element, APP) {
    this.element = element;
    this.text = this.element.textContent;
    this.index = 0;
    this.typing = false;

    // Use the scrolltrigger class
    this.scrolltrigger = new APP.components.scrolltrigger(element, APP);
  }

  init() {
    this.element.textContent = "";

    // Initialize the scrolltrigger
    this.scrolltrigger.init();

    // Check if the element is already in the viewport and start typing
    if (this.element.classList.contains("is-in-viewport") && !this.typing) {
      this.type();
    }

    // Observe when the element enters the viewport
    const observer = new MutationObserver(() => {
      if (this.element.classList.contains("is-in-viewport") && !this.typing) {
        this.type();
      }
    });

    // Start observing the element for class changes
    observer.observe(this.element, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }

  type() {
    if (this.index < this.text.length) {
      this.typing = true;
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), 100);
    } else {
      this.typing = false;
    }
  }
}
