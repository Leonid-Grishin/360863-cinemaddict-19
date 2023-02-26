import FilmListView from '../view/film-list-view';
import {render} from '../render';
import {TOP_RATED_CARDS_TO_SHOW} from '../const';
import CardView from '../view/card-view';
import FilmContainerView from '../view/film-container-view';

export default class TopRatedFilmsPresenter {
  boardComponent = new FilmContainerView({isExtra: true, title: 'Top rated'});
  filmListComponent = new FilmListView();

  constructor({boardContainer, moviesModel}) {
    this.boardContainer = boardContainer;
    this.moviesModel = moviesModel;
  }

  init() {
    this.movies = [...this.moviesModel.movies];
    this.movies.sort((a,b) => b.filmInfo.totalRating - a.filmInfo.totalRating);

    render(this.boardComponent, this.boardContainer);
    render(this.filmListComponent, this.boardComponent.element);

    for (let i = 0; i < TOP_RATED_CARDS_TO_SHOW; i++) {
      render(new CardView(this.movies[i]), this.filmListComponent.element);
    }
  }
}
