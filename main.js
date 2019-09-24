// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



function accum(s) {
    let upperCaseS = s.toUpperCase();
    let stringToArray = Array.from(upperCaseS);      // s.split(",");
    let result="";
    let newResult;


    for(i=0; i<upperCaseS.length; i++){
        result = result + upperCaseS[i] + upperCaseS[i].repeat(i).toLowerCase();
result= result+'-';


            }
    newResult= result.slice(0, -1);
    return newResult;

}

console.log(accum('adfkjdflk;a'));