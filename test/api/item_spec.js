require('babel-core/register');
const frisby = require('frisby');
const props = require('../../properties');

const url = `http://${props.HOST}:${props.PORT}/api/v1`;

let item1 = {
  name: 'name_'+Date.now(),
  number: Date.now()
};

let wrong_item1 = {
  name:123,
  number:[1,2,3]
};



frisby.create('create item successful').post(url + '/item', item1)
  .expectStatus(200)
  .expectJSON({result:'ok'})
  .toss();


frisby.create('wrong data').post(url + '/item', wrong_item1)
  .expectStatus(400)
  .expectJSON({error:'Validation error'})
  .toss();

frisby.create('list items successful').get(url + '/item')
  .expectStatus(200)
  .expectJSON({result:'ok'})
  .toss();
