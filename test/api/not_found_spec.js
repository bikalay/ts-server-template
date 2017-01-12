require('babel-core/register');
var frisby = require('frisby');
var props = require('../../properties');


var url = 'http://'+props.HOST+':'+props.PORT+'/api';

frisby.create('not found').get(url+'/asdads/asdasd?asd=132')
    .expectStatus(404)
    .expectHeaderContains('content-type', 'application/json')
    .toss();



