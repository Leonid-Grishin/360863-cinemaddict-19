import {render} from "./render";
import FilterView from "./view/filter-view";
import CardView from "./view/card-view";
import UserView from "./view/user-view";
import ShowMoreButtonView from "./view/show-more-button-view";
import PopupView from "./view/popup-view";
import FooterStatisticView from "./view/footer-statistic-view";
import MoviesApiService from "./api/movies-api-service";
import CommentsApiService from "./api/comments-api-service";
import {END_POINT, AUTHORIZATION} from './const';
import MoviesModel from "./model/movies-model";
import CommentsModel from "./model/comments-model";
import BoardView from "./view/board-view";
import AllFilmsPresenter from "./presenter/all-films-presenter";
import TopRatedFilmsPresenter from "./presenter/top-rated-films-presenter";
import MostCommentedFilmsPresenter from "./presenter/most-commented-films-presenter";
import SortView from "./view/sort-view";
import UserPresenter from "./presenter/user-presenter";

const mainElement = document.querySelector('.main');
const headerElement = document.querySelector('.header');
const bodyElement = document.querySelector('body');
const footerStatisticContainerElement = document.querySelector('.footer__statistics');
const boardView = new BoardView();
const moviesModel = new MoviesModel();
const commentsModel = new CommentsModel();

render(new FooterStatisticView({moviesModel: moviesModel}), footerStatisticContainerElement);
render(new FilterView(), mainElement);
render(new SortView(), mainElement);
render(boardView, mainElement)

const allFilmsPresenter = new AllFilmsPresenter({bordContainer: boardView.element, moviesModel: moviesModel, commentsModel: commentsModel});
const topRatedFilmsPresenter = new TopRatedFilmsPresenter({boardContainer: boardView.element, moviesModel: moviesModel});
const mostCommentedFilmsPresenter = new MostCommentedFilmsPresenter({boardContainer: boardView.element, moviesModel: moviesModel})
allFilmsPresenter.init();
topRatedFilmsPresenter.init();
mostCommentedFilmsPresenter.init();

const userPresenter = new UserPresenter({userContainer: headerElement, moviesModel: moviesModel});
userPresenter.init();

/*const servMovies = new MoviesApiService(END_POINT, AUTHORIZATION);
console.log(servMovies.movies)

const servComments0 = new CommentsApiService(END_POINT, AUTHORIZATION, 0);
console.log(servComments0.comments);*/
