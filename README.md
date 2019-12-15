# pouchdb-memory

PouchDB Memory Extension

This extension creates a memory instance of pouchdb, which can be useful in dev or test environments 
of your application. It does not install level db so the node modules footprint is very small and 
does not require gcc compile step.

## Usage

```
npm install pouchdb-memory
```


```
const PouchDB = require('pouchdb-memory')
const db = PouchDB('mymemorydb', { adapter: 'memory'})

db.info().then(res => console.log(res))
```




