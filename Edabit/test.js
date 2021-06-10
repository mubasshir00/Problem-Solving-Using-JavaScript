const str1 = "Mubasshir";
const str2 = "Ahmed";
const str3 = "Rakib";
const newStr = str1.concat(str2);
const newStrWithSpace = str1.concat(' ',str2);
const newStringWithComma = str1.concat(', ',str2);
const newStringWithStringLiteral = `${str1} ,  ${str2}`
const newStrWithThreeSubStr = str1.concat(' ',str2,' ',str3)
console.log(newStr);
console.log(newStrWithSpace)
console.log(newStringWithComma)
console.log(newStringWithStringLiteral)
console.log(newStrWithThreeSubStr)