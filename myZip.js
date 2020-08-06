const removeFirstElement = function(list){
    return list.slice(1);
};

const myZip = function(list1, list2){

    if(list1.length == 0 || list2.length == 0){
        return []
    }

    const zipList = [[list1[0],list2[0]]];
    remainList1 = removeFirstElement(list1);
    remainList2 = removeFirstElement(list2);

    return zipList.concat(myZip(remainList1, remainList2));
};

const main = function(){
    console.log(myZip([1,2,3],[4,5,6]));
    console.log(myZip([1,2,3],[4,5,]));
    console.log(myZip([1,2],[4,5,6]));
    console.log(myZip([],[4,5,6]));
    console.log(myZip([1,2],[]));
};

main();
