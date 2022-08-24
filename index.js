//XMLHttpRequest - GET & POST data using Vanilla JavaScript AJAX

const req = new XMLHttpRequest()
const url = 'https://jsonplaceholder.typicode.com/posts'

req.open('GET', url) //send a get req to the url

req.onload = (() => {
  //alert('Got a response') //f(x) will be called after loading the data or response frm the server

  if (req.status >= 200 && req.status < 300) {
    const posts = JSON.parse(req.responseText)

    console.log(posts)
  } else if (req.status === 404) {
    alert('The url wasnt found')
  } else {
    alert('Unknown error occurre')
  }

})

req.send()

//fetch API

/*fetch('https://reqres.in/api/users/',
  {
    //has to tell fetch that ure gonna pass the json by setting the header
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',   //GET, POST, PATCH, DELETE
    body:
      JSON.stringify({ name: 'User 1' }) //converts JS obj/value into JSON string. If u forgot to convert this, it will not gonna work

  })
  .then(res => {

    return res.json()
  })
  .then(data => console.log(data)).catch(err => console.error(err)) */


//Output:

/*{name: 'User 1', id: '981', createdAt: '2022-08-23T04:00:12.159Z'}
createdAt: "2022-08-23T04:00:12.159Z"
id: "981"
name: "User 1"
[[Prototype]]: Object*/



/*
const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false)

table[0] = true

  for(let i=0; i<=targetSum; i++){
    if(table[i] === true){
      for(let num of numbers){

         table[i+num] = true
      }

    }
  }

return table[targetSum]

}


console.log(canSum(7, [4, 2]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(300, [7, 14])); */




/*const howSum = (targetSum, numbers, memo = {}) => {

  if (targetSum in memo) return memo[targetSum]


  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let num of numbers) {

    const rem = targetSum - num

    const remRes = howSum(rem, numbers, memo);

    if (remRes !== null) {
      memo[targetSum] = [...remRes, num];

      //console.log(memo);

      return memo[targetSum];
    }

  }

  memo[targetSum] = null

  return memo[targetSum];

}

const howSumStarts = Date.now()
console.log(howSum(36, [4, 2]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(300, [7, 14]));
const howSumEnds = Date.now();


console.log(
  `The ops in howSum() performed in n*m^2 finished in ${
  howSumEnds - howSumStarts
  } ms`
); */


//m = row
//n= column
/*const gridTraveler = (m, n) => {

  //need to uppeth by +1 to match the m value
  //Array index always starts @ 0
  const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0))

  table[1][1] = 1
  //console.log(table)

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j]

      //look downward and inc the current value
      if (i + 1 <= m) table[i + 1][j] += current
      //look to the right and inc the current value
      if (j + 1 <= n) table[i][j + 1] += current
    }

  }

  //console.log(table)

  return table[m][n]

}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18))
*/


//Tabulation recipe 
//1. Visualize the prob. as a table
//2. Size the table based in the inputs
//3. Initialize the table with default values
//4. Seed the trivial answer into the table
//5. Iterate through the table
//6. Fill further positions based on the current position

//canSum tabulation

//return a bool on whether to indicate the possibility
//of generating the targetSum using numbers in the array

//assume that nos. are nonnegative


//canSum(targetSum, numbers)


/*const canSum = (targetSum, numbers) => {

  const table = Array(targetSum + 1).fill(false)

  table[0] = true //seed value (base case when you're using recursion/tree diagram) (no elements in need to be taken)

  //console.log(table)

  for (let i = 0; i <= targetSum; i++) {

    if (table[i] === true) {

      for (let num of numbers) {
        table[i + num] = true
      }
    }
  }

  return table[targetSum]

}


console.log(canSum(7, [3, 4, 5, 15]))
console.log(canSum(0, [3, 4, 5, 15]))*/

/*const howSum = (targetSum, numbers) => {

  const table = Array(targetSum + 1).fill(null)

  table[0] = []

  console.log(table)

  for (let i = 0; i <= targetSum; i++) {

    if (table[i] !== null) {
      //either the element is subarray or subarray w/ nos.
      for (let num of numbers) {

        table[i + num] = [...table[i], num]

        //console.log(table)
      }
    }

  }

  return table[targetSum]
}

console.log(howSum(7, [3, 4, 5])) //-> [3,4]*/

//practice bestSum

//get the possible shorter combos that make up the targetSum


/*const bestSum = (targetSum, numbers) => {

  const table = Array(targetSum + 1).fill(null)

  table[0] = []

  //console.log(table)

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {

      for (let num of numbers) {

        const combo = [...table[i], num]
        // console.log(combo)
        //the algo will take the shorter combo than the current one

        if (!table[i + num] || table[i + num].length > combo.length) {
          table[i + num] = combo
        }

      }

    }
  }

  return table[targetSum]

}

console.log(bestSum(21, [2, 4, 6, 9, 10]))*/


//write a f(x) canConstruct(target, wordBank) that
//accepts a target string & an array of strings

/*
const canConstruct = (targetString, wordBank) => {

  const table = Array(targetString.length + 1).fill(false)

  table[0] = true //seeding the bool true (signifies that emptry string will always be right)

  console.log(table)

  for (let i = 0; i <= targetString.length; i++) {

    if (table[i] === true) {
      for (let word of wordBank) {
        //if the word matches the chars starting @ position i then look @ next one
        if (targetString.slice(i, i + word.length) === word) {
          table[i + word.length] = true //look far ahead then set to true
        }
      }
    }

  }

  return table[targetString.length]
  //have the information from the start of the targetString to the end of it

}

console.log(canConstruct('abcdef', ['ab', 'cd', 'abc', 'def']))


Diff. bet. memoization & tabulation

//memo - needs to cut off the prefix while factoring word length just to get suffix. Then, shrink it by recursive manner until empty string, that turns true. Memo just to make ops faster.

//tab - needs to match sliced targetString starting from the current position to the last char of the word (excl. i) against the picked word

*/

//m = targetString
//n = word.length

/*
const countConstruct = (targetString, wordBank) => {

  const table = Array(targetString.length + 1).fill(0)

  table[0] = 1

  console.log(table)

  for (let i = 0; i <= targetString.length; i++) {

    //if (table[i] === 1) {

    for (let word of wordBank) {
      if (targetString.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i]
      }
    }



  }

  return table[targetString.length] //the value at the end of the table is the final answer

}


console.log(countConstruct('abcdef', ['ab', 'cd', 'abc', 'def']))

//note that when checking or measuring in numbers, make sure dont forget the length property of an array
*/

//allConstruct tabulation technique
/*
const allConstruct = (target, wordBank) => {

  const table = Array(target.length + 1).fill().map(() => []) //inc by 1 bec. it starts with 0

  table[0] = [[]] // seed a 2d array asit will return of combination of subarrays

  console.log(table)

  for (let i = 0; i <= target.length; i++) {

    for (word of wordBank) {

      if (target.slice(i, i + word.length) === word) {


        //In every current position of an index, the matched word will be copied and added. Then, it'll be stored to newCombo
        const newCombo = table[i].map(subArray => [...subArray, word])

        //table[word.length + i] = newCombo //it can override the existing combos that ite has been found

        table[word.length + i].push(...newCombo)

        //While moving the index table forward per word length space, the
        //push method will be used to add only the new combos and retain the existing combos. Use spread op to unpack the subarrays



      }
    }

  }

  return table[target.length] //returns the final combos that has been copied and added after the logic's been done with it.

}


console.log(allConstruct('abcdef', ['ab', 'cd', 'abc', 'def', 'abcd', 'ef', 'c']))
*/
//Tips on Dyn Prog.

//notice any overlapping subprob
//decide what's the trivially smallest input
//think recursively to use memoize
//think iteratively to use tab




