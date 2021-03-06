// Assignment functions from chapter on Hash Maps


function palindrome(str){
  if (str === str.split("").reverse().join("")){ 
      return true; 
  }else{
      return false;
  }
}




// input string 'str' will be checked to see if
// any possible permutations of it are a 
// palindrome
function containsPalindrome(str)
{
    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    for (var i = 0; i < str.length; i++) {
        letter = str[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for (var letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    return palindromeSum < 2;
}

// This is a string permutation generator
function *permute(a, n = a.length) {
  if (n <= 1) yield a.slice();
  else for (let i = 0; i < n; i++) {
    yield *permute(a, n - 1);
    const j = n % 2 ? 0 : i;
    [a[n-1], a[j]] = [a[j], a[n-1]];
  }
}


// I'm just experimenting with generators here
function* testGenerator(){
  let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let str = '';
  let result = [];
  let myStr = '';
  function makeStr(){
      for (let i=0; i<3; i++){
          str += arr[Math.round(Math.random()*arr.length)];
      }
      str = str.slice(str.length-3,str.length);
      return str;
  }
  for (let n=0; n<100; n++){
      myStr = makeStr();
      result.push(myStr);
  }
  while (true) {
      yield result + ' ]--> '+ containsPalindrome(result.pop())
  }
}

//console.log(Array.from(permute("xyz".split(''))).map(perm => perm.join('')));

// Typical hash function 
function hashString(str){
    let hash = 5381;
    for (let i=0; i<str.length; i++){
        hash = ( hash << 5 ) + hash + str.charCodeAt(i);
        hash = hash & hash;
    }
    return hash >>> 0;
}

// can also import npm module 'string-hash'

module.exports = { palindrome, containsPalindrome, permute, testGenerator, hashString } 


