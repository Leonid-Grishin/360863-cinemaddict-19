import {mockComments} from '../mock/comments';

export default class CommentsModel {
  #comments = mockComments;

  get comments() {
    return this.#comments;
  }
}
