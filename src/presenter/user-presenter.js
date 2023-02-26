import {render} from "../render";
import UserView from "../view/user-view";

export default class UserPresenter {
/*    boardContainer;
    moviesModel;*/

    constructor({userContainer, moviesModel}) {
        this.userContainer = userContainer;
        this.moviesModel = moviesModel;
    }

    init() {
        this.movies = [...this.moviesModel.movies];
        const watchedMovies = this.movies.filter((movie) => movie.userDetails.alreadyWatched);
        render(new UserView(watchedMovies.length), this.userContainer);
    }
}
