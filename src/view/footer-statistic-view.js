import {createElement} from "../render";

function createFooterStatisticTemplate(count) {
  return (`
    <p>${count} movies inside</p>
  `);
}

export default class FooterStatisticView {
  #element;
  #moviesModel;
  #moviesCount;

  constructor({moviesModel}) {
    this.#moviesModel = moviesModel;
    this.#moviesCount = this.#moviesModel.movies.length
  }

  get template () {
    return createFooterStatisticTemplate(this.#moviesCount);
  }

  get element () {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement () {
    this.#element = null;
  }
}
