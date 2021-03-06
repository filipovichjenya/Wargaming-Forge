/* eslint-disable func-style */
/*
Given a list of strings, return the count of the number of
strings where the string length is 2 or more and the first
and last chars of the string are the same.

['abc', 'aa', 'bb'] yields 2
*/
export function matchEnds(words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < 2) continue;
    if (words[i][0] === words[i][words[i].length - 1]) count++;
  }
  return count;
}

/*
Given an array of numbers, return new array where
first element is diffrence between maximum and minimum of passed array
last element is sum of minimum and maximum
and passed array in center
[1, 2, 3] yields [2, 1, 2, 3, 4]
[5, 2, 14] yields [12, 5, 2, 14, 16]
*/
export function addFirstAndLast(numbers) {
  const num = numbers.slice().sort((a, b) => a - b);
  numbers.unshift(num[num.length - 1] - num[0]);
  numbers.push(num[num.length - 1] + num[0]);
  return numbers;
}

/*
Given a list of strings, return a list with the strings
in sorted order, except group all the strings that begin with 'x' first.
e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields
['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
Hint: this can be done by making 2 lists and sorting each of them
before combining them.
*/
export function xLetterFirst(words) {
  const result = [];
  const resultX = [];
  words.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === 'x') {
      resultX.push(words[i]);
      continue;
    }
    result.push(words[i]);
  }
  return [...resultX, ...result];
}

/*
Given a list of non-empty arrays, return a list sorted in increasing
order by the last element in each tuple.
e.g. [[1, 7], [1, 3], [3, 4, 5], [2, 2]] yields
[[2, 2], [1, 3], [3, 4, 5], [1, 7]]
*/
export function sortByLast(nestedArrays) {
  return nestedArrays.sort((a, b) => a[a.length - 1] - b[b.length - 1]);
}
