let pattern = 'pw';

let refExOne = new RegExp("pattern");

let flag = 'gi';

let regExTwo = new RegExp(pattern, flag);

let regExThree = /pw/gi

const strToCheck = "PW is growing at a rapid speed and recently they are working on PwSkills to create skills based pwContent";

const result = regExThree.test(strToCheck);
console.log(result);

const anotherResult = strToCheck.match(regExThree);
console.log(anotherResult);

const oneMoreResult =strToCheck.replace(regExThree, 'p-w');
console.log(oneMoreResult);

const webUrl = "https://pwskills.com/aman%20gutpa";

const useableUrl = webUrl.replace(/%\d 0/, '-');
console.log(useableUrl);