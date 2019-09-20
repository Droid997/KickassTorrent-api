const kat = require('./lib/kat.js');

kat.advanceSearch('Game Of Thrones')
.then(data=>{
	console.log(data)
    // game of thrones result
    }).catch(error=>{})
