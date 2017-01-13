import * as validator from 'validator';
import ValidationError from './validation-error';
import {REQUIRED, INVALID_EMAIL} from './validation-messages';

/**
 * @param {string} fieldName
 * @param {boolean?} isEmptyPass
 * @param {string?} message
 * @return {(val:any)=>undefined}
 */
export function isEmail(fieldName:string, isEmptyPass?:boolean, message?:string) {
    return function EmailValidator(val) {
      if(!val && !isEmptyPass) {
        throw new ValidationError(message || REQUIRED, fieldName);
      }
      else if (val && !validator.isEmail(val)) {
        throw new ValidationError(message || INVALID_EMAIL, fieldName);
      }
    }
}
