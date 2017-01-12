import * as itemService from '../services/item-service';

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
