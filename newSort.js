// new sort algorithm
// Takes 2 arrays as parameters and returns a concatenated array that is itself sorted


function newSort(arr1, arr2){

    let newArr = []
    
    // Create a left and right pointer that each increment when that value is added to newArr
    // Continue incrementing until all values in both arrays are exhausted

    let l_ptr=0, r_ptr=0

    while (l_ptr+r_ptr < arr1.length+arr2.length){

        // arr1 uses left_ptr and arr2 uses right_ptr
        if (l_ptr >= arr1.length || arr1[l_ptr] >= arr2[r_ptr] ){

          // r_ptr is only incremented after the value is pushed onto newArr
          newArr.push(arr2[r_ptr++])
        } 
        else{
          newArr.push(arr1[l_ptr++])
        } 
        //console.log("newArr: ", newArr)
    }
   return newArr
}

 //arrOne = [1, 3, 6, 8, 11]
 //arrTwo = [2, 3, 5, 8, 9, 10]
arrOne = [ 1,2,3,4,5 ]
arrTwo = [ 6, 9, 15, 33 ]

console.log(newSort(arrOne, arrTwo))
