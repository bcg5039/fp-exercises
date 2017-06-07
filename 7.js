const { wordsToNumbers } = require('words-to-numbers')
const { map, compose, curry, tap,sum,filter } = require('ramda')

const numbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten'
]
function count(list){
  function reducer(accumulator,value){
    return accumulator + 1
  }
  return list.reduce(reducer,0)
}

function sum(list){
  function reducer(accumulator,value){
    return accumulator + value
  }
  return list.reduce(reducer,0)
  // acc = 0
  // value = 1
  // ---
  // acc = 1
  // value = 2
  // ---
  // acc = 2
  // value = 3
}

const divisibleBy = curry(function(number,value){
  return value % number === 0
})
const printSumDivThree = compose(
  tap(function(v){
    console.log(v)
  }),
   sum,
   tap(function(v){
     console.log(v)
   }),
   filter(divisibleBy(3)),
   tap(function(v){
     console.log(v)
   }),
  map(wordsToNumbers)
)

printSumDivThree(numbers)
