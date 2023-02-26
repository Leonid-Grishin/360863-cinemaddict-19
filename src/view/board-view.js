import {createElement} from '../render';

function createBoardTemplate () {
  return (`
  <section class="films">

  </section>
  `);
}

export default class BoardView {
  #element;

  get template() {
    return createBoardTemplate();
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
