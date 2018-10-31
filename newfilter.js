// Trying to implement my own filter function from scratch



function newFilter(arr, callback){
    let newArr = []
        for (let n=0; n<arr.length; n++){
          if (callback(arr[n])){  newArr.push(arr[n]) }
        }
    return newArr
}


function cb(num){
    if (num>24){ 
        return num 
    } else return false
}



let arr1 = [ 18, 19, 30, 34, 37, 44 ]

//console.log( newFilter(arr1, cb) )    // it works
//console.log( newFilter(arr1, function(num){ if (num>24) return num }) )   // it works
console.log( newFilter(arr1, num => num>24 ? num : '' )  )                  // it works
