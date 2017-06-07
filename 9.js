const {reduce} = require('./fp-utils')

function map(fn,list){
  function reducer(acc,v){
    acc.push(fn(value))
    return acc
  }
  return reduce(reducer, [], list)
}

const result = map(function (v){
  console.log(v)
  return v+1
},[1,2,3])
console.log(result)
