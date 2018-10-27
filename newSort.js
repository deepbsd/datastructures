// new sort algorithm


function newSort(arr1, arr2){

   // if (arr1.length != arr2.length) {return "Bad input"}

    let newArr = []
    let longer, shorter

    if (arr1.length > arr2.length) { longer = arr1; shorter = arr2 } else { longer = arr2; shorter = arr1 }


    //  **** First Option  ******

    // Must have pre-sorted arrays
    //for (let n=0; n<arr1.length;n++){
    //    if ( arr1[n]<arr2[n] ){ 
    //      newArr.push(arr1[n])
    //      newArr.push(arr2[n])
    //    }else{
    //      newArr.push(arr2[n])
    //      newArr.push(arr1[n])
    //    }
    //}

    //  **** Second Option  ******

    // Must have pre-sorted arrays
    //for (let n=0; n<longer.length; n++){
    //    if (shorter[n]){ 
    //        
    //        if ( longer[n]<shorter[n] ){
    //          newArr.push(longer[n]) 
    //          newArr.push(shorter[n]) 
    //        }else{
    //          newArr.push(shorter[n])
    //          newArr.push(longer[n])
    //        }
    //    }else{
    //        if (longer[n]>newArr[-1]){
    //          newArr.push(longer[n])
    //        } else {
    //          let last = newArr[newArr.length-1]
    //          newArr.splice(newArr.length-1, 1, longer[n])
    //          newArr.push(last)
    //        }
    //    }
    //}
    
    //  **** Third Option ****
    for (let i=0; i<longer.length; i++){
        console.log("longer: ", longer)
        console.log("shorter: ", shorter)
        if (shorter[i]){
            if (longer[i]<shorter[i]){
                newArr.push(longer[i])
                newArr.push(shorter[i])
            }else{
                newArr.push(shorter[i])
                newArr.push(longer[i])
       }
       if (!shorter[i]){
           newArr.push(longer[i])
           console.log("??")
       }
      }
      for (let j=newArr.length; j<=0; j--){
        if (newArr[j]<newArr[j-1]){
           let temp = newArr[j-1]
           newArr[j-1]=newArr[j]
           newArr[j]=temp
        } else {
           continue;
        }
     }
     console.log("Newarr: ", newArr)
   }

    return newArr
}

 arrOne = [1, 3, 6, 8, 11]
 arrTwo = [2, 3, 5, 8, 9, 10]


//arrOne = [ 1, 500, 600 ]
//arrTwo = [ 2, 250, 275 ]

//arrOne = [ 1, 3, 5 ]
//arrOne = [ 1, 7, 9 ]
//arrTwo = [ 2, 4, 6 ]
//arrTwo = [ 2, 4, 6 ]

console.log(newSort(arrOne, arrTwo))
