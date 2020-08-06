const removeFirstItem = function(list){
    return list.slice(1);
};

const myForEach = function(list, mapper){

    if(list.length == 0){
        return [];
    }

    const firstItem = list[0];
    const remainingList = removeFirstItem(list);

    mapper(firstItem);

    myForEach(remainingList, mapper);

    return;
};

