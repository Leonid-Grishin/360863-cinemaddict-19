import {createElement} from '../render';
import dayjs from 'dayjs';
import {truncateString} from '../utils';
import {CARD_DESCRIPTION_LENGTH} from '../const';

function createGenresTemplate(genres) {
  return genres.map((genre) => `
  <span class="film-card__genre">${genre}</span>
  `).join('');
}

function createCardTemplate (movie) {
  const genresTemplate = createGenresTemplate(movie.filmInfo.genre);

  return (`
    <article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${movie.filmInfo.title}</h3>
        <p class="film-card__rating">${movie.filmInfo.totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${dayjs(movie.filmInfo.release.date).format('YYYY')}</span>
          <span class="film-card__duration">${movie.filmInfo.duration}m</span>
          ${genresTemplate}
        </p>
        <img src="./${movie.filmInfo.poster}" alt="${movie.filmInfo.title}" class="film-card__poster">
        <p class="film-card__description">${truncateString(movie.filmInfo.description, CARD_DESCRIPTION_LENGTH)}</p>
        <span class="film-card__comments">${(movie.comments).length} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${movie.userDetails.watchlist ? 'film-card__controls-item--active' : ''}" type="button">${movie.userDetails.watchlist ? 'In watchlist' : 'Add to watchlist'}</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${movie.userDetails.alreadyWatched ? 'film-card__controls-item--active' : ''}" type="button">${movie.userDetails.alreadyWatched ? 'Already watched' : 'Mark as watched'}</button>
        <button class="film-card__controls-item film-card__controls-item--favorite ${movie.userDetails.favorite ? 'film-card__controls-item--active' : ''}" type="button">${movie.userDetails.favorite ? 'In favorite' : 'Mark as favorite'}</button>
      </div>
    </article>
  `);
}

export default class CardView {
  #element;
  #movie;

  constructor(movie) {
    this.#movie = movie;
  }

  get template () {
    return createCardTemplate(this.#movie);
  }

  get element () {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
