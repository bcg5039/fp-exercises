// filter exercises
const {compose, map, filter} = require('./fp-utils')
const trace = function (v){
  console.log(v)
  return v
}

/*
3. Filter all buzzwords that contains cloud, html, and data
*/
//---------------------------start of exercise 3
const h = require('hyperscript')
const buzzwords = require('buzzwords')
const li = (w) => h('li', w)

const renderBuzzwords = compose(
  map(li),
  filter(contains(['cloud','html','data']))
)


console.log(h('ul', renderBuzzwords(buzzwords)).outerHTML)

function contains(keepers){
  return function(buzzword){
    return keepers.find(keeper => hasText(buzzword, keeper))
  }
}

function hasText(compareString, queryString){
  return RegExp(queryString).test(compareString)
}


//---------------------------end of exercise 3









/*
2. Show only numbers divisible by 5
*/
//-------------------------start of exercise 2

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//
// const isDivisibleBy5 = function (v){
//   return v % 5 === 0
// }
//
//
// compose(
//   trace,
//   filter(isDivisibleBy5)
// )(numbers)







//-------------------------end of exercise 2

/*
1. Show only even numbers
*/
//-------------------------start of exercise 1

// const numbers = [1,2,3,4,5,6,7,8,9,10]
//
// const isEven = function(v){
//   return v % 2 === 0
// }

//
// compose(
//   trace,
//   filter(isEven)
//
// )(numbers)


//-------------------------end of exercise 1
