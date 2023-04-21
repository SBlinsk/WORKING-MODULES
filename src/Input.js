export class Input {
  constructor(parent) {
    this.parent = parent;
    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.setAttribute("name", "input");
    this.input.classList.add("input");
    this.parent.appendChild(this.input);
  }

  getValue() {
    return this.input.value;
  }
  clear() {
    this.input.value = "";
    return this.input.value;
  }
}
