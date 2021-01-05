// fixture.js

let Data = require('./../data/data.json');

let projects = Object.values(Data)
// console.log('projects', projects)

export { projects as Data }
