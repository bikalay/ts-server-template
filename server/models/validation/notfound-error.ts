import {NOT_FOUND} from './validation-messages';
export default class NotFoundError extends Error {
  constructor(message:string=NOT_FOUND) {
    super(message);
    this.name = 'NotFoundError';
  }
}
