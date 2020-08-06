const removeFirstItem = function(list){
  return list.slice(1);
};

const formatErrorMessage = function(actual, expected){
  return "\n  -> actual: " + actual 
    + "\n  -> expected: " + expected;
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

const areLengthsEqual = function(list1, list2){
  return list1.length == list2.length;
};

const areEqual = function(actual, expected){

  actualList = [].concat(actual);
  expectedList = [].concat(expected);

  if(! areLengthsEqual(actualList, expectedList)){
    return false;
  }

  return areEachItemsEqual(actualList, expectedList);
};

const assertEqual = function(actualValue, expectedValue, message){
  let symbol = "✓";
  let errorMessage = "";

  if(! areEqual(actualValue, expectedValue)){
    symbol = "✗";
    errorMessage = formatErrorMessage(actualValue, expectedValue);
  }

  console.log(symbol, message, errorMessage);
};

const runTests = function(){
  assertEqual(1,2,"test assertEqual not equality");
  assertEqual(10,10,"test assertEqual equality");
  //assertEqual(,,);
};

const main = function(){
  runTests();
};

main();
