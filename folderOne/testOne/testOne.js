/**
 * Create a function to return an array 
 *  after removing given number from the given array
 * 
 * 
 * 
 * [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
 */

let value = 2
let arr = [1, 2, 3, 4, 5]
 
 arr = arr.filter(function(item) {
     return item !== value
 })
 
 console.log(arr);



 /**
 * Create a function to return the missing smallest positive number in given array
 * 
 * 
 * [1, 2, 3, 4, 5]   ->   6
 *  
 */

  const array = [1, 2, 3, 4, 5];
  const findSmallest = (arr = []) => {
     let count = 1;
     if(!array?.length){
        return count;
     };
     while(array.indexOf(count) !== -1){
        count++;
     };
     return count;
  };
  console.log(findSmallest(array));



/**
 * Create a function to return the points to be marked against for over speeding.
 * 
 * For every 5mph over the speed limit, 1 point should be marked
 * 
 * function will:
 *      take userSpeed and speedLimit as input
 *      return the number of points should be marked against the license.
 * 
 * 
 * 
 * sl= 60 , us = 70 -> points = 2
 * 
 */