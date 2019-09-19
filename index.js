
function iterativeLog(array){
<<<<<<< HEAD
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var numArray = [1, 2, 3, 4]
  numArray.forEach(callback)
  return numArray
}

function doToArray(array, callback){
  array.forEach(callback)
=======
  array.forEach((element, index) => {console.log(`${element}: ${index}`)})
>>>>>>> 7a8120d968bd455c1d3609ac251f36016a2658ea
}