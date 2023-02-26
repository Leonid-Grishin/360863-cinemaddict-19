import FilmContainerView from "../view/film-container-view";
import FilmListView from "../view/film-list-view";
import {render} from "../render";
import CardView from "../view/card-view";
import ShowMoreButtonView from "../view/show-more-button-view";
import {CARDS_TO_SHOW} from "../const";
import PopupView from "../view/popup-view";

export default class AllFilmsPresenter {
  #boardComponent = new FilmContainerView();
  #filmListComponent = new FilmListView();
  bodyElement = document.querySelector('body');

  constructor({bordContainer, moviesModel, commentsModel}) {
    this.boardContainer = bordContainer;
    this.moviesModel = moviesModel;
    this.commentsModel = commentsModel;
  }

  init() {
    this.movies = [...this.moviesModel.movies];
    this.comments = this.commentsModel.comments;

    render(this.#boardComponent, this.boardContainer);
    render(this.#filmListComponent, this.#boardComponent.element);

    for (let i = 0; i < CARDS_TO_SHOW; i++) {
      this.#renderCard(this.movies[i])
    }

    if(this.movies.length > CARDS_TO_SHOW) {
      render(new ShowMoreButtonView(), this.#boardComponent.element);
    }

    //render(new PopupView(this.movies[0], this.comments[this.movies[0].id]), this.bodyElement);
  }

  #renderCard(movie) {
    const cardComponent = new CardView(movie);
    const popupComponent = new PopupView(movie, this.comments[movie.id]);
    const bodyElement = document.querySelector('body');

    const createPopup = () => {
      this.#filmListComponent.element.appendChild(popupComponent.element);
    };

    const removePopup = () => {
      this.#filmListComponent.element.removeChild(popupComponent.element);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault()
        removePopup();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    cardComponent.element.querySelector('.film-card__link').addEventListener('click', () => {
      createPopup();
      bodyElement.classList.add('hide-overflow');
      document.addEventListener('keydown', escKeyDownHandler);
    });

    popupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
      removePopup();
      bodyElement.classList.remove('hide-overflow');
      document.removeEventListener('keydown', escKeyDownHandler);
    });


    render(cardComponent, this.#filmListComponent.element);
  };
}
