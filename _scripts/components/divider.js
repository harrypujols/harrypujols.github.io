export default class {
  constructor(element, APP) {
    this.element = element;
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.resize = APP.methods.resizestop;
    this.character = this.element.getAttribute("data-character") || "*";
  }

  updateCharacter() {
    const characterCount = Math.floor(this.width / this.characterWidth());
    const repeatedCharacters = this.character.repeat(characterCount);
    this.element.innerHTML = repeatedCharacters;
  }

  characterWidth() {
    const span = document.createElement("span");
    span.style.fontFamily = "monospace";
    span.style.visibility = "hidden";
    span.textContent = this.character;
    document.body.appendChild(span);
    const characterWidth = span.offsetWidth;
    document.body.removeChild(span);
    return characterWidth;
  }

  init() {
    this.updateCharacter();

    this.resize(() => {
      this.width = this.element.offsetWidth;
      this.height = this.element.offsetHeight;
      this.updateCharacter();
    }, 66);
  }
}
