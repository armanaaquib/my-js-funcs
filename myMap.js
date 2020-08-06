/*
const removeFirstItem = function(list){
  return list.slice(1);
};

const myMap = function(list, mapper){

  if(list.length == 0){
    return [];
  }

  const firstItem = list[0];
  const remainingList = removeFirstItem(list);

  const mappedList = [mapper(firstItem)];

  return mappedList.concat(myMap(remainingList, mapper));
};
*/

const myMap = function(list, mapper){
    const mappedList = [];

    for(let index = 0; index < list.length; index++){
        mappedList.push(mapper(list[index], index, list));
    }

    return mappedList;
};
