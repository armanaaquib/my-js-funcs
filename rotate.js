const rotate = function(list, n){
    const rotatedList = list;

    for(let start = 1; start <= n; start++){
        rotatedList.push(list.shift());
    }

    return rotatedList;
};
