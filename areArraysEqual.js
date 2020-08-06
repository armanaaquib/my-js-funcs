const removeFirstItem = function(list){
  return list.slice(1);
};

const areEachItemsEqual = function(list1, list2){

  if(list1.length == 0){
    return true;
  }

  const areFirstItemsEqual = list1[0] == list2[0];
  const remainlist1 = removeFirstItem(list1);
  const remainlist2 = removeFirstItem(list2);

  return areFirstItemsEqual && areEachItemsEqual(remainlist1,remainlist2);
};

const areLengthsEqual = function(firstArray, secondArray){
  return firstArray.length == secondArray.length;
};

const areArraysEqual = function(firstArray, secondArray){

  if(! areLengthsEqual(firstArray, secondArray)){
    return false;
  }

  return areEachItemsEqual(firstArray, secondArray);
};
