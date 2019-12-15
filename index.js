/*
 * create a pouchdb memory extension
 *
 * this extension installs the memory plugin 
 * with map reduce 
 * with find
 * with replication
 */
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-memory'))
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-mapreduce'))
PouchDB.plugin(require('pouchdb-replication'))
PouchDB.plugin(require('pouchdb-find'))


module.exports = PouchDB 
