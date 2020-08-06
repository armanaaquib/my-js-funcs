/*
const combine = function(doFirst, doLast, x){
    return doLast(doFirst(x));
};

const sqrPlusOne = combine(x => x ** 2, x => x + 1, 10);
console.log(sqrPlusOne);
*/

const combine = function(doFirst, doLast){
    return function(x,y){
        return doLast(doFirst(x,y));
    }
};

const sqrPlusOne = combine(function(x) { return x ** 2; }, function(x) { return x + 1; });
const sqrPlusTwo = combine(function(x) { return x ** 2; }, function(x) { return x + 2; });
const addThenSqr = combine(function(x,y) { return x + y; }, function(x) { return x ** 2; });
console.log(sqrPlusOne(2));
console.log(sqrPlusTwo(3));
console.log(addThenSqr(3,2));
