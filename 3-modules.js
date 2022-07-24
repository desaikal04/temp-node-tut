const {john,peter} = require('./4-names')
const {sayHi, sayHello} = require('./5-utils')
const data = require('./6-alternative-module-exports')

console.log(data);

sayHi('susan')
sayHi(john)
sayHello(peter)

require('./7-module-import-executes-function')