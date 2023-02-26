import {mockMovies} from '../mock/movies';

export default class MoviesModel {
  #movies = mockMovies;

  get movies() {
    return this.#movies.map(this.#adaptToClient);
  }

  #adaptToClient(movie) {
    const releaseValue = {...movie.film_info.release,
      releaseCountry: movie.film_info.release.release_country
    };

    delete releaseValue['release_country'];

    const filmInfoValue = {...movie.film_info,
      ageRating: movie.film_info.age_rating,
      totalRating: movie.film_info.total_rating,
      alternativeTitle: movie.film_info.alternative_title,
      release: releaseValue,
    };

    delete filmInfoValue['age_rating'];
    delete filmInfoValue['total_rating'];
    delete filmInfoValue['alternative_title'];

    const userDetailsValue = {...movie.user_details,
      alreadyWatched: movie.user_details.already_watched,
      watchingDate: movie.user_details.watching_date,
    };

    delete userDetailsValue['already_watched'];
    delete userDetailsValue['watching_date'];

    const adaptedMovie = {... movie,
      filmInfo: filmInfoValue,
      userDetails: userDetailsValue,
    };

    delete adaptedMovie['film_info'];
    delete adaptedMovie['user_details'];

    return adaptedMovie;
  }

}
