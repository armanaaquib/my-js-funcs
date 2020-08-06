const removeFirstItem = function(list){
  return list.slice(1);
};

const every = function(list, predicate){

  if(list.length == 0){
    return true;
  }

  const firstItem = list[0];
  const remainingList = removeFirstItem(list);

  return predicate(firstItem) && every(remainingList, predicate);
};
