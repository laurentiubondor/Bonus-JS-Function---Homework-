//easy 1

function addition(a, b) {


    return a + b;

}
console.log(addition(2, 3));
console.log(addition(-3, -6));
console.log(addition(7, 3));

//easy 2
function convert(minutes) {

    return Math.floor(minutes * 60);
}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));
//easy 3
function additionPlusOne(num) {
    return num + 1;

}
console.log(additionPlusOne(0));
console.log(additionPlusOne(9));
console.log(additionPlusOne(-3));
//easy 4
function getFirstValue(arr) {



    return arr[0];

}

console.log(getFirstValue([1, 2, 3]));

console.log(getFirstValue([80, 5, 100]));

console.log(getFirstValue([-500, 0, 50]));


//easy 5
function remainder(x, y) {
    return x % y;


}
console.log(remainder(1, 3))

console.log(remainder(3, 4))

console.log(remainder(-9, 45))

console.log(remainder(5, 5))
    //easy 6
function animals(chickens, cows, pigs) {
    chickens *= 2;
    cows *= 4;
    pigs *= 4;
    return chickens + cows + pigs;
}
console.log(animals(2, 3, 5))

console.log(animals(1, 2, 3))

console.log(animals(5, 2, 8))


//easy 7
function divisibleByFive(n) {
    if (n % 5 == 0)

        return true
    else(n % 5 == 1)

    return false

}
console.log(divisibleByFive(5))

console.log(divisibleByFive(-55))

console.log(divisibleByFive(37))

//easy 8
function comp(str1, str2) {
    if (str1.length == str2.length)
        return true
    else
        return false
            //or 	return str1.length === str2.length;

}

console.log(comp("AB", "CD"))

console.log(comp("ABC", "DE"))

console.log(comp("hello", "edabit"))

//easy 9
function sayHelloBye(name, num) {
    if (num == 0)

        return "Bye " + name.charAt(0).toUpperCase() + name.slice(1);

    else
        return "Hello " + name.charAt(0).toUpperCase() + name.slice(1);

}

console.log(sayHelloBye("alon", 1))

console.log(sayHelloBye("Tomi", 0))

console.log(sayHelloBye("jose", 0))




//medium 1
function addUp(num) {

    sum = 0;

    for (var i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum

};

console.log(addUp(4));

console.log(addUp(13));

console.log(addUp(600));



//medium 2
function minMax(arr) {

    /* var returnArr = [];
     var min = arr[0];
     var max = arr[0];
     for (var i = 1; i < arr; ++i) {
         if (arr[i] > max) {
             max = arr[i];
         }
     }



     {
         if (arr[i] < min) {
             min = arr[i];
         }
     }

     returnArr.push(min);
     returnArr.push(max);
     return returnArr;*/


    return [Math.min(...arr), Math.max(...arr)];
}


console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([4, 6]));








//hard 1 find index position in sentence
function findNemo(sentence) {

    var arr = sentence.split(" ");

    for (var i = 0; i < arr.length; ++i)

    {
        if (arr[i] === "Nemo")
            return "I found Nemo at" + (arr.indexOf("Nemo") + 1) + "!" //sau 	return `I found Nemo at ${i + 1}!`


    }

    return "I can't find Nemo :("
}

console.log(findNemo("I am finding Nemo !"))


console.log(findNemo("Nemo is me"))


console.log(findNemo("I Nemo am"))




//hard 2 object into array
function toArray(obj) {
    return Object.entries(obj);
}



console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));