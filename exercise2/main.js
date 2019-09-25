// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, and u as vowels for this Kata.
//
//     The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    let vowels = ['a','e', 'i', 'o','u'];

    for(i=0;i<str.length;i++){
        for(j=0;j<vowels.length;j++){
            if (str[i]===vowels[j]){
                vowelsCount++;
                break;
            }
        }

    }



    return vowelsCount;
}
getCount('aedooiwp');

function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}