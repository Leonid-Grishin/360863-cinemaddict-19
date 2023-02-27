import {createElement} from '../render';
import dayjs from 'dayjs';
import {EMOJI} from '../const';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

function createGenreTemplate(genres) {
  return genres.map((genre) =>
    `<span class="film-details__genre">${genre}</span>`).join('');
}

function createCommentTemplate(comments) {
  return comments.map((comment) =>
    `
      <li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-${comment.emotion}">
        </span>
        <div>
          <p class="film-details__comment-text">${comment.comment}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${comment.author}</span>
            <span class="film-details__comment-day">${dayjs(comment.date).fromNow()}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>
      `).join('');
}

function createEmojiTemplate() {
  return EMOJI.map((emoji) => `
    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emoji}" value="${emoji}">
    <label class="film-details__emoji-label" for="emoji-${emoji}">
      <img src="./images/emoji/${emoji}.png" width="30" height="30" alt="${emoji}">
    </label>
  `).join('');
}

function createPopupTemplate (movie, comments) {
  const genresTemplate = createGenreTemplate(movie.filmInfo.genre);
  const commentsTemplate = createCommentTemplate(comments);
  const emojiTemplate = createEmojiTemplate();

  return (`
    <section class="film-details">
      <div class="film-details__inner">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="./${movie.filmInfo.poster}" alt="${movie.filmInfo.title}">

              <p class="film-details__age">${movie.filmInfo.ageRating}+</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${movie.filmInfo.title}</h3>
                  <p class="film-details__title-original">Original: ${movie.filmInfo.alternativeTitle}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${movie.filmInfo.totalRating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${movie.filmInfo.director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${movie.filmInfo.writers.toString()}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${movie.filmInfo.actors.toString()}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${dayjs(movie.filmInfo.release.date).format('DD MMMM YYYY')}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Duration</td>
                  <td class="film-details__cell">${Math.floor(dayjs.duration({minutes: 142}).asHours())}h ${movie.filmInfo.duration % 60}m</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${movie.filmInfo.release.releaseCountry}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">
                    ${genresTemplate}
                </tr>
              </table>

              <p class="film-details__film-description">
                ${movie.filmInfo.description}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            <button type="button" class="film-details__control-button film-details__control-button--watchlist ${movie.userDetails.watchlist ? 'film-details__control-button--active' : ''}" id="watchlist" name="watchlist">${movie.userDetails.watchlist ? 'In watchlist' : 'Add to watchlist'}</button>
            <button type="button" class="film-details__control-button ${movie.userDetails.alreadyWatched ? 'film-details__control-button--active' : ''} film-details__control-button--watched" id="watched" name="watched">${movie.userDetails.alreadyWatched ? 'Already watched' : 'Mark as watched'}</button>
            <button type="button" class="film-details__control-button film-details__control-button--favorite ${movie.userDetails.favorite ? 'film-details__control-button--active' : ''}" id="favorite" name="favorite">${movie.userDetails.favorite ? 'In favorite' : 'Mark as favorite'}</button>
          </section>
        </div>

        <div class="film-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

            <ul class="film-details__comments-list">
            ${commentsTemplate}
            </ul>

            <form class="film-details__new-comment" action="" method="get">
              <div class="film-details__add-emoji-label"></div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div class="film-details__emoji-list">
                ${emojiTemplate}
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  `);
}

export default class PopupView {
  #element;
  #movie;
  #comments;

  constructor(movie, comments) {
    this.#movie = movie;
    this.#comments = comments;
  }

  get template () {
    return createPopupTemplate(this.#movie, this.#comments);
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
