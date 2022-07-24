const sayHi = name =>{
    console.log(`Hi ${name}`);
}

const sayHello = name =>{
    console.log(`Hello ${name}`);
}
//module.exports = sayHi //here sayHI is exported as default, hence is not wrapped around {}
module.exports = {sayHi, sayHello}

