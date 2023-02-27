import {createElement} from '../render';

function createFilmContainerTemplate(isExtra, title) {
  return (`
    <section class="films-list ${isExtra ? 'films-list--extra' : '' }">
      <h2 class="films-list__title ${title ? title : 'visually-hidden'}">${title ? title : 'All movies. Upcoming'}</h2>
    </section>
  `);
}

export default class FilmContainerView {
  #element;
  isExtra;
  title;

  constructor(options = null) {
    if(options) {
      'isExtra' in options ? this.isExtra = options.isExtra : this.isExtra = null;
      'title' in options ? this.title = options.title : this.title = null;
    }
  }

  get template() {
    return createFilmContainerTemplate(this.isExtra, this.title);
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
