let assert = require('assert')


function sub(a,b) {
    return a + b
}


r= sub(1,3)
assert(r===3 , 'something wrong with sub function')

  //or
 // assert.equal(r,4, 'something wrong with sub function')
// assert.notEqual(r,4, 'something wrong with sub function')