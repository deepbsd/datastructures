// Assignment functions from chapter on Hash Maps


function palindrome(str){
  if (str === str.split("").reverse().join("")){ 
      return true; 
  }else{
      return false;
  }
}


//console.log(palindrome("racecar"));

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

function *permute(a, n = a.length) {
  if (n <= 1) yield a.slice();
  else for (let i = 0; i < n; i++) {
    yield *permute(a, n - 1);
    const j = n % 2 ? 0 : i;
    [a[n-1], a[j]] = [a[j], a[n-1]];
  }
}


function* testGenerator(){
  let arr = ['a','b','c','d'];
  while (true) {
    yield arr.pop() || Math.round(Math.random()*100);
  }
}

console.log(Array.from(permute("xyz".split(''))).map(perm => perm.join('')));

module.exports = { palindrome, containsPalindrome, permute, testGenerator }
