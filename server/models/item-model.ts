import ottoman from '../db';

export interface IItem {
  oid:string;
  name:string;
  number:number;
}

export const Item = ottoman.model('Item', {
  oid: { type: 'string', auto: 'uuid', readonly: true },
  name: 'string',
  number: 'number'
}, {
  id: 'oid',
  index: {
    findByOid: {
      by: 'oid',
      type: 'n1ql',
    }
  }
});
