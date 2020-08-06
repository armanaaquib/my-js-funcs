/*
const removeFirstItem = function(list){
  return list.slice(1);
};

const myFilter = function(list, predicate){

  if(list.length == 0){
    return [];
  }

  const filteredList = [];
  const firstItem = list[0];
  const remainingList = removeFirstItem(list);

  if(predicate(firstItem)){
    filteredList.push(firstItem);
  }

  return filteredList.concat(myFilter(remainingList, predicate));
};
*/

const filter = function(list, predicate){
    const filteredList = [];

    for(let index = 0; index < list.length; index++){

        if(predicate(list[index], index, list)){
            filteredList.push(list[index]);
        }
    }
    
    return filteredList;
};


