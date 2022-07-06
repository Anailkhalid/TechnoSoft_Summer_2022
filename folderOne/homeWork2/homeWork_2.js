
// /**
//  * if the length of sentence1 is greater than or equals to 10
//  *      assign 15 in result1
//  * otherwise
//  *      assign 25 in result1
//  */

const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
console.log(`result1 -> ${sentence1}`);







// /**
//  * replace all instances of a/A with 'Alpha', print the result in console
//  */

 const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let replaceSentence2 = sentence2.replace(/a/gi,'Alpha');

 console.log(`sentence2 -> ${replaceSentence2}`);





/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */

 const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let sentence3Lenght = sentence3.length;
 console.log(`\nsentence3 -> ${sentence3}`);
 console.log(`Lenght = ${sentence3Lenght}`);

 let sentence3StartsWith = sentence3.startsWith('health');
 console.log(`\nsentence3 -> ${sentence3}`);
 console.log(`StartsWith = ${sentence3StartsWith}`);

 let sentence3Index = sentence3.indexOf('Body');
 console.log(`\nsentence3 -> ${sentence3}`);
 console.log(`index = ${sentence3Index}`);

 let sentence3IndexofLast = sentence3.lastIndexOf('.');
 console.log(`\nsentence3 -> ${sentence3}`);
 console.log(`indexOfLast = ${sentence3IndexofLast}`);

 let sentence3IncludesBody = sentence3.includes('Body/i');
 console.log(`\nsentence3 -> ${sentence3}`);
 console.log(`IncludesBody = ${sentence3IncludesBody}`);