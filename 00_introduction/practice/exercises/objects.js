/*
collect array's element to object with first letters as keys
and sorted words array as a value

Example:
['test', 'foo', 'bar', 'farm', 'trust', 'ham', 'harm'] -> {
  't': ['test', 'trust'],
  'f': ['farm', 'foo'],
  'b': ['bar'],
  'h': ['ham', 'harm'],
}
*/
export function collectByFirstLetter(...words) {
  const obj = {};
  words
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    })
    .forEach(el => {
      if (Array.isArray(obj[el[0]])) {
        obj[el[0]].push(el);
      } else {
        obj[el[0]] = [];
        obj[el[0]].push(el);
      }
    });
  return obj;
}

/*
Write a function which receives object and list of keys
and returns object with only keys passed in arguments.
unknown keys are ignored

Example:
({name: 'John', age: 42}, 'name') yields {name: 'John'}
*/
export function only(obj, ...keys) {
  let o = {};
  keys.forEach(el => {
    if (obj.hasOwnProperty(el)) o[el] = obj[el];
  });
  return o;
}

/*
Function counts words in given text.
returns an object with word as key and it's frequence as value

Note: It should ignore punctuation marks and uppercase symbols

Example:
'Awesome! Does it work? It should works' yields
{
  awesome: 1,
  test: 1,
  it: 2,
  should: 1,
  works: 1,
}
'' yields {}
*/
export function wordsCount(text) {
  let o = {};
  if (!text) return o;
  let arr = text
    .replace(/[^\w\s]/g, '')
    .toLowerCase()
    .split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in o) {
      o[arr[i]] += 1;
    } else {
      o[arr[i]] = 1;
    }
  }
  return o;
}

/*
Write a function's body which create an object for user representation
It should contains method for password validation:
password is weak if it contains only lowercase letters or only uppercase

Example:
const user = createUser('root', 'topsecret')
user.login === 'root' // true
user.password === 'topsecret' // true
user.isWeakPassword() === true
user.password = 'topSecreT'
user.isWeakPassword() === false
*/

export function createUser(login, password) {
  return new function() {
    this.login = login;
    this.password = password;
    this.isWeakPassword = function() {
      return (
        this.password === this.password.toLowerCase() ||
        this.password === this.password.toUpperCase()
      );
    };
  }();
}
