import ApiService from "../framework/api-service";

export default class MoviesApiService extends  ApiService {
  get movies() {
    return this._load({url: 'movies'}).then(ApiService.parseResponse);
  }
}
