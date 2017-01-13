import {VALIDATION_ERROR} from './validation-messages';
export default class ValidationError extends Error {
  fieldName:string;
  constructor(message:string=VALIDATION_ERROR, fieldName) {
    super(message);
    this.name = 'ValidationError';
    this.fieldName = fieldName;
  }
}
