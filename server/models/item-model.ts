import ottoman from '../db';
import {isEmail} from './validation'
import {IModel} from './imodel';

export interface IItem extends IModel {
  oid:string;
  name:string;
  number:number;
}

export const Item = ottoman.model('Item', {
  oid: { type: 'string', auto: 'uuid', readonly: true },
  name: { type:'string'},
  number: 'number',
  email: {type:'string', validator:isEmail('email')}
}, {
  id: 'oid',
  index: {
    findById: {
      by: 'oid',
      type: 'refdoc'
    }
  }
});
