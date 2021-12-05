//1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log(ages[ages.length-1] - ages[0]);

ages.push(7);
console.log(ages[ages.length-1] - ages[0]);

let i, sum=0;
    for(i=0; i<ages.length; i++){
        sum = sum + ages[i];
    }   
    console.log(sum/ages.length);
//2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

sum = 0;
    for(i=0; i<names.length; i++){
        sum = sum + names[i].length;
    }
    console.log(sum/names.length);

let con = names[0];
    for (i=1; i<names.length; i++){
        con = con.concat(' ',names[i]);
    }
    console.log(con);

//3.	How do you access the last element of any array?
// You would use the array slice function
// You would then get the last element by using the negative index
// let lastElement = arry.slice(-1);

// 4.	How do you access the first element of any array?
// You would use the array slice function
// You would get the first element by using (0)
// let firstElement = arry.slice(0);

// 5.
let nameLengths = [];
    for (i=0; i < names.length; i++) {
    nameLengths[i] = names [i].length;
}

// 6.
sum = 0;
    for (i=0; i<nameLengths.length; i++){
    sum = sum + nameLengths[i];
}
    console.log(sum);

// 7.
function concat_n_times(word,n) 
{
    let con=word
    for (i=1; i<=n; i++)
     {
        con = con.concat(word);
    }
    return con;

}
console.log(concat_n_times('Hello', 3));

// 8.
function fullName(firstName, lastName) {
    return firstName.concat(' ',lastName);
}

console.log(fullName('Tyler','Moore'));

// 9.
function isTotalGreaterThan100(arr)
    {
    sum=0;
    for(i=0;i<arr.length;i++) 
    {
    sum = (sum + arr[i]);
    }
    if (sum>100)
     {
    return true;
    }
    else {
    return false;
    }
    }


// 10.
function average (arr){
    sum = 0;{
        for ( i= 0; i< arr.length; i++){
            sum = sum + arr[i];
        }
    }return (sum/arr.length);
}


// 11.
let myArr = [1, 3, 5, 7, 9];
let myArr2 = [2, 4, 6];
function compareAverage(myArr,myArr2) {
    if(average(myArr) > average(myArr2)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isTotalGreaterThan100(myArr));
console.log(average(myArr));
console.log(compareAverage(myArr/myArr2.length));

//12
function willBuyDrink(isHotOutside,moneyInPocket) {
    if((isHotOutside)&& (moneyInPocket > 10.50)) {
        return true;
    }
    else {
        return false;
    }
}
let isHotOutside = true;
let moneyInPocket = 30.5;
console.log(willBuyDrink(isHotOutside,moneyInPocket));

//13
// I have created a function that will convert celsius to fahrenheit
function convertToF (celsius){
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}
convertToF (40);