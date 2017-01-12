import {Item, IItem} from '../../../models/item-model';

export function list(query = {}) {
  return new Promise((resolve, reject) => {
    return Item.find(query, (err, result)=>{
      if(err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}

export function create(obj:IItem) {
  return new Promise((resolve, reject) => {
    const item = new Item(obj);
    item.save((err)=>{
      if(err) {
        return reject(err);
      }
      return resolve({result:'ok'});
    });
  });
}
