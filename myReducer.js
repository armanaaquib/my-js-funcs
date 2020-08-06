const ascending = function(numbers, newNumber){
    ascendingNumbers = numbers.concat();

    for(number of ascendingNumbers){

        if(newNumber < number){
            newNumberIndex = ascendingNumbers.indexOf(number);
            ascendingNumbers.splice(newNumberIndex,0,newNumber);
            return ascendingNumbers;
        }

    }

    ascendingNumbers.push(newNumber);
    return ascendingNumbers;
};

const insertBegin = function(list, item){
    return [item].concat(list);
};

const uniqAppend = function(list, item){

    //if(list.indexOf(item) == -1){
    //return list.concat(item)
    //}

    //return list

    if(list.includes(item)){
        return list;
    }

    return list.concat(item);
};

const sum = function(number1, number2){
    return number1 + number2;
};

const greater = function(number1, number2){
    if(number1 > number2){
        return number1;
    }

    return number2;
};

const smaller = function(number1, number2){
    if(number1 < number2){
        return number1;
    }

    return number2;
};

/*
const removeLastItem = function(list){
    return list.slice(0,-1);
};

const myReduce = function(list, reducer, context){

    if(list.length == 1 && context == undefined){
        return list[0];
    }

    if(list.length == 0){
        return context; 
    }

    const lastItem = list[list.length - 1];
    const remainingList = removeLastItem(list);

    return reducer(myReduce(remainingList, reducer, context),lastItem);
};
*/

const myReduce = function(list, reducer, context){

    let index = 0;

    if(context === undefined){
        context = list[0];
        index = 1;
    }

    while(index < list.length){
        context = reducer(context, list[index]);
        index += 1;
    }

    return context;
};

const main = function(){
    //console.log(13 === myReduce([1,2], sum, 10));
    //console.log(11 === myReduce([], sum, 11));
    //console.log(3 === myReduce([1,2], sum));
    //console.log(undefined === myReduce([], sum));
    //console.log("1,234" === myReduce([3,4], sum, [1,2]));


    //console.log(3 === myReduce([1,2,3], greater,2));
    //console.log(10 === myReduce([1,2,3], greater,10));

    //console.log(1 === myReduce([1,2,3], smaller));
    //console.log(1 === myReduce([1,2,3], smaller, Infinity));

    //console.log(myReduce([1,2,3,3,2,1], uniqAppend, []));
    //console.log(myReduce([1,2,3,3,2,1,0], uniqAppend, []));
    //console.log(myReduce([1,2,3,0], uniqAppend, []));

    //console.log(myReduce([1,2,3,3,2,1], insertBegin, []));
    //console.log(myReduce([1,2,3,3,2,1,0], insertBegin, []));
    //console.log(myReduce([1,2,3,0], insertBegin, []));

    console.log(ascending([1,3],2));
    console.log(ascending([],2));

    console.log(myReduce([1,2,3,3,2,1], ascending, []));
    console.log(myReduce([1,2,3,3,2,1,0], ascending, []));
    console.log(myReduce([1,2,3,0], ascending, []));
};

main();
