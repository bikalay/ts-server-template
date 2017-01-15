import {Item, IItem} from '../../../models/item-model';
import NotFoundError from '../../../models/validation/notfound-error';

export function findById(id:string) {
  return new Promise((resolve, reject) => {
    return Item.findById(id, (err, result:Array<any>)=>{
      if(err) {
        return reject(err);
      }
      if(!result || result.length===0) {
        return reject(new NotFoundError());
      }
      return resolve(result[0]);
    });
  });
}

export function list(query = {}, options={limit:100, skip:0}) {
  return new Promise((resolve, reject) => {
    return Item.find(query, options, (err, result:Array<any>)=>{
      if(err) {
        return reject(err);
      }
      return count(query).then((count)=>{
        return resolve({data:result, count});
      });
    });
  });
}

export function count(query = {}) {
  return new Promise((resolve, reject) => {
    return Item.count(query, {}, (err, count)=>{
      if(err) {
        return reject(err);
      }
      return resolve(count);
    });
  });
}

export function create(obj) {
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

export function update(itemId:string, obj) {
  return findById(itemId).then((item:IItem)=>{
    return new Promise((resolve, reject) => {
      Object.assign(item, obj);
      item.save((err)=>{
        if(err) {
          return reject(err);
        }
        return resolve({result:'ok'});
      });
    });
  });
}

export function remove(itemId:string) {
  return findById(itemId).then((item:IItem)=>{
    return new Promise((resolve, reject) => {
      item.remove((err)=>{
        if(err) {
          return reject(err);
        }
        return resolve({result:'ok'});
      });
    });
  });
}

