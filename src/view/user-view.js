import {createElement} from "../render";
import {getUserGrade} from "../utils";

function createUserTemplate(watchedMoviesCount) {
  return(`
    <section class="header__profile profile">
      <p class="profile__rating">${getUserGrade(watchedMoviesCount)}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>
  `);
}

export default class UserView {
  #element;
  watchedMoviesCount;

  constructor(watchedMoviesCount) {
    this.watchedMoviesCount = watchedMoviesCount;
  }


  get template() {
    return createUserTemplate(this.watchedMoviesCount);
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
