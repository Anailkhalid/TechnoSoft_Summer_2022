/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

//  function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (let i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return str.join(' ');
//   }
//   console.log(titleCase("have a great day"));
//   console.log(titleCase("YOu lIVe ONlY ONcE"));
//   console.log(titleCase("gooD mORNIng"));
//   console.log(titleCase("apple banana cherry"));


  /**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

//    function reverserStr(str){
//     let word = str.split(" ").reverse().join(" ");
//     return word;
//  }
//  console.log(reverserStr("have a great day"));
//  console.log(reverserStr("good morning"));
//  console.log(reverserStr("hello dear how are you doing"));
//  console.log(reverserStr("Learn"));

/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

//  let arr = [1, 2, 3, 4, 5];
//  let sum = 0;
 
//  for (let index = 0; index < arr.length; index++) {
//    sum += arr[index];
//  }
//  console.log(sum);

/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 const arr = [1, 2, 3, 4, 5];
 let sum = 0;
 for (let number of arr) {
     sum += number;
 }
 average = sum / arr.length;
 console.log(average);