import * as itemService from '../services/item-service';

export function findById(req, res, next) {
  return itemService.findById(req.params.itemId).then((result)=>{
    return res.json(result);
  }).catch(next);
}

export function list(req, res, next) {
  const limit = req.query.limit || 100;
  const skip = req.query.page ? req.query.page*limit : 0;
  const sort = req.query.sort
        && /^-/.test(req.query.sort) ? {[req.query.sort.replace(/^-/,'')]:false} : {[req.query.sort]:true};
  const options = {limit,skip,sort};
  return itemService.list(null, options).then((result:{data:Array<any>, count:number})=>{
    const pageCount = Math.ceil(result.count/limit);
    const page = req.query.page || 0;
    res.setHeader("X-Page", page);
    res.setHeader("X-PageSize", limit);
    res.setHeader("X-PageCount", pageCount);
    res.setHeader("X-Total", result.count);
    return res.json(result.data);
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
