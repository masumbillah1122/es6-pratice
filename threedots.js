const ages = [12, 14, 16, 17, 13];
const ages2 = [15, 16, 20];
const ages3 = [20, 35, 40, 25];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650, 450, 250, 1050];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisha);
console.log(maximum);