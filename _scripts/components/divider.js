export default class {
  constructor(element, APP) {
    this.element = element;
    this.width = this.element.offsetWidth;
    this.resize = APP.methods.resizestop;
    this.character = this.element.dataset.character || "*";
    this.characterAdjust = this.element.dataset.adjust || 0;
  }

  updateCharacter() {
    const characterCount =
      Math.floor(this.width / this.characterWidth()) - this.characterAdjust;
    const repeatedCharacters = this.character.repeat(characterCount);
    this.element.innerHTML = repeatedCharacters;
  }

  characterWidth() {
    // Create a temporary element to measure the width in ch units
    const tempElement = document.createElement("div");
    tempElement.style.width = "1ch";
    tempElement.style.position = "absolute";
    tempElement.style.visibility = "hidden";
    document.body.appendChild(tempElement);

    const characterWidth = tempElement.offsetWidth;
    document.body.removeChild(tempElement);
    return characterWidth;
  }

  init() {
    this.updateCharacter();

    this.resize(() => {
      this.width = this.element.offsetWidth;
      this.updateCharacter();
    }, 45);
  }
}
