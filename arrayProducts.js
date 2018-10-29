// This exercise comes from the Thinkful CS Chapter on Arrays, 3rd exercise

// Returns an array of same length as input arr, and each index is the product
// of all indexes other than current index, so index 0 excludes value at index
// 0 in product while index 1 excludes value at index 1 in its product and so forth.
function arrayProducts(arr){
    let newArr = []
    let product = arr.reduce( (a,b) => a*b )
    for (let n=0; n<arr.length; n++){
        newArr.push(product/arr[n])
    }
    return newArr
}

function arrayProducts1(arr){
    let newArr = []
    let product = 1
    for (let n=0; n<arr.length; n++){
        product = product*arr[n]
    }
    for (let m=0; m<arr.length; m++){
        newArr.push(product/arr[m])
    }
    return newArr
}

arr1 = [1,2,3,4,5]
arr3 = [10, 20, 30, 40]
arr2 = [1,3,9,4]


console.log("array: ",arr1, " product: ", arr1.reduce( (a,b) => a*b ), "  array: ", arrayProducts1(arr1))
