import * as couchbase from 'couchbase';
import props from '../properties';

const ottoman = require('ottoman');

const cluster = new couchbase.Cluster('couchbase://'+ props.DB_HOST);
ottoman.bucket = cluster.openBucket(props.DB_NAME);

export default ottoman;
