require('babel-core/register');
const frisby = require('frisby');
const props = require('../../properties');

const url = `http://${props.HOST}:${props.PORT}/api/v1`;

let item1 = {
  name: 'name_'+Date.now(),
  number: Date.now(),
  email: Date.now()+'@example.org'
};

let wrong_item1 = {
  name:'name',
  number:123123
};

let wrong_item2 = {
  name:'name',
  number:123123,
  email:'123'
};

frisby.create('create item successful').post(url + '/item', item1)
  .expectStatus(200)
  .expectJSON({result:'ok'})
  .toss();


frisby.create('wrong data (empty email)').post(url + '/item', wrong_item1)
  .expectStatus(400)
  .expectJSON({error:'Required', fieldName:'email'})
  .toss();

frisby.create('wrong data (wrong email)').post(url + '/item', wrong_item2)
  .expectStatus(400)
  .expectJSON({error:'Invalid email', fieldName:'email'})
  .toss();

frisby.create('list items successful').get(url + '/item')
  .expectStatus(200)
  .after(function(err, res, ignore){
    var body = JSON.parse(res.body);
    var lastItemId = body[body.length-1].oid;
    var newName = 'new_name_'+Date.now();
    frisby.create('update item successful').put(url + '/item/'+lastItemId, {name: newName})
      .expectStatus(200)
      .expectJSON({result:'ok'})
      .after(function(err, res, ignore){
        frisby.create('get item successful').get(url + '/item/'+lastItemId)
          .expectStatus(200)
          .expectJSON({name:newName})
          .after(function(err, res, ignore){
            frisby.create('delete item successful').delete(url + '/item/'+lastItemId)
              .expectStatus(200)
              .expectJSON({result:'ok'})
              .toss();
          })
          .toss();
      })
      .toss();
  })
  .toss();

frisby.create('item not found').get(url + '/item/wrong-id')
  .expectStatus(404)
  .expectJSON({error:'Not found'})
  .toss();
