/**
 * Create abbreviation for any sentence
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY' ->  'YLO'
 * 'yOu neVER WaLK alOne in liFe'   ->  'YNWAIL'
 * 'good Morning'   -> 'GM'
 * 
 */

// let sentence = 'have a great day';
// let abbr = '';
// let sentenceWords = sentence.toUpperCase().split(' ');

// for (let i = 0; i <= sentenceWords.length-1 ; i++){
//     abbr = abbr + sentenceWords[i].substring(0,1);
// }
// console.log(`abbr -> ${abbr}`);


/**
 * print the array-values in reverse order
 * 
 * eg:
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * Rugby
 * Baseball
 * BASKETBALL
 * Soccer
 * Football
 * 
 */

 const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 let sportsRev = sports.reverse();
 for (let i=0 ; i <= sportsRev.length-1 ; i++) {
    console.log(sportsRev[i]);
 }
