console.log('#### add with callback ####')

function addWithCallback (a, b, callback) {
  const result = a + b
  callback(result)
}

addWithCallback(1, 2, (result) => {
  console.log('Result 1: ' + result)
  addWithCallback(result, 3, (result2) => {
    console.log('Result 2: ' + result2)
    addWithCallback(result2, 4, (result3) => {
      console.log('Result 3: ' + result3)
      addWithCallback(result3, 5, (result4) => {
        console.log('Result 4: ' + result4)
        addWithCallback(result4, 6, (result5) => {
          console.log('Result 5: ' + result5)
          addWithCallback(result5, 7, (result6) => {
            console.log('Result 6: ' + result6)
            addWithCallback(result6, 8, (result7) => {
              console.log('Result 7: ' + result7)
            })
          })
        })
      })
    })
  })
})

console.log()

console.log('#### add with promise ####')
function addWithPromise (a, b) {
  return new Promise((resolve, reject) => {
    resolve(a + b)
  })
}

addWithPromise(1, 2)
  .then((result) => {
    console.log('Result1 :' + result)
    return addWithPromise(result, 3)
  })
  .then((result2) => {
    console.log('Result2 :' + result2)
    return addWithPromise(result2, 4)
  })
  .then((result3) => {
    console.log('Result3 :' + result3)
    return addWithPromise(result3, 5)
  })
  .then((result4) => {
    console.log('Result4 :' + result4)
    return addWithPromise(result4, 6)
  })
  .then((result5) => {
    console.log('Result5 :' + result5)
    return addWithPromise(result5, 7)
  })
  .then((result6) => {
    console.log('Result6 :' + result6)
    return addWithPromise(result6, 8)
  })
  .then((result7) => {
    console.log('Result7 :' + result7)
  })
