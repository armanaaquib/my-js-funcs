const removeFirstItem = function(list){
  return list.slice(1);
};

const some = function(list, predicate){

  if(list.length == 0){
    return false;
  }

  const firstItem = list[0];
  const remainingList = removeFirstItem(list);

  return predicate(firstItem) || some(remainingList, predicate);
};
