//cmd value
// ls
// add hello world
//remove 1
let todos = ['Remember the milk','Write some code','Walk on the beach']
const {map} = require('./fp-utils')
const args = process.argv.slice(2)
const cmd = args[0]
const values = args.slice(1)

//console.log(cmd,values)
if(cmd === 'ls'){
  console.log('')
  console.log('Todos')
  console.log('-------------------------')
  map(function (todo){
    console.log(todo)
  },todos)

  console.log('-------------------------')
  console.log(
reduce(function(acc,value){
  return acc+1
},0,todos),
     'Items Not Complete')
}
