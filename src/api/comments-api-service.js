import ApiService from '../framework/api-service';

export default class CommentsApiService extends ApiService {
  id;

  constructor(endPoint, authorization, id) {
    super(endPoint, authorization);

    this.id = id;
  }

  get comments() {
    return this._load({url: `comments/${this.id}`}).then(ApiService.parseResponse);
  }
}
