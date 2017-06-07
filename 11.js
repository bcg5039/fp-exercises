const {reduce} = require('./fp-utils')
const {compose, append, join,__, filter} = require('ramda')
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
  print(todos)
} else if (cmd === 'add'){
  fadd(values)
} else if (cmd === 'rm'){
  removeTodo(values,todos)
}


// function add(values){
//   const newItem = values.join(' ')
//   todos.push(newItem)
//   print(todos)
// }
function removeTodo(values,todos){
  //input
  //------> values = ['1']
  //------> todos = ['Remember the milk','Write some code','Walk on the beach']

  //ouput
  //------> todos === ['Remember the milk','Walk on the beach']

  //  [ ]1. get index of todo we want to remove
  //      a. transform array to a value
  //      b. transform string to integer -- parseInt('1',10)
  // [x]2. use filter to only return items that do not match that index
  // [x]3. print the todos

//print(removeItemByIndex(parseInt(head(values),10),todos))
todos = compose(tap(print),
removeItem(todos),
toInteger,
head)(values)




//   todos = compose(
//     tap(print),
//     function(index){
//       return filter(function(v){
//         return todos.indexOf(index) === v ? false : true
//
//       },todos)
//     },
// function (s){
//   return  parseInt(s,10)
// },
//     head
//   )(values)
//
//   )
 }


function tap(fn){
  return function(v){
    fn(v)
    return v
  }
}

function toInteger(s){
  return parseInt(s,10)
}

function removeItem(todos){
  return function (index){
    return removeItemByIndex(index,todos)
  }
}

function head(array){
  return array[0]
}

 function removeItemByIndex(index, todos){
   return filter(function(v){
     return todos[index] === v ? false : true
   },todos)
 }

function fadd(values,todos){
    compose(
    tap(print),
    append(__,todos),
    join(' ')
  )(values)
}

function print(list){
  console.log('')
  console.log('Todos')
  console.log('-------------------------')

  map(function (todo){
    console.log(todo)
  },list)

  console.log('-------------------------')
  console.log(
reduce(function(acc,value){
  return acc+1
},0,list),
     'Items Not Complete')
}
