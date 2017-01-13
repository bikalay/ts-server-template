import * as itemService from '../services/item-service';

export function findById(req, res, next) {
  return itemService.findById(req.params.itemId).then((result)=>{
    return res.json(result);
  }).catch(next);
}

export function list(req, res, next) {
  return itemService.list().then((result)=>{
    return res.json(result);
  }).catch(next);
}

export function create(req, res, next) {
  return itemService.create(req.body).then((result)=>{
    return res.json(result);
  }).catch(next);
}

export function update(req, res, next) {
  return itemService.update(req.params.itemId, req.body).then((result)=>{
    return res.json(result);
  }).catch(next);
}

export function remove(req, res, next) {
  return itemService.remove(req.params.itemId).then((result)=>{
    return res.json(result);
  }).catch(next);
}
