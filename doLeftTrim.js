const getSubString = function(string,startIndex,end){
  let subString = ""

  for(let index = startIndex; index < end; index++){
    subString += string[index];
  }
  return subString;
};

const getLength = function(string){
  let count;
  for(count = 0; string[count] != undefined; count++){}
  return count;
};

const absoluteIndex = function(string,indicator){
  let index;

  if(indicator == 1){
    index = 0;
  }

  if(indicator == -1){
    index = getLength(string) - 1;
  }

  while(" \t\n".includes(string[index])){
    index += indicator;
  }

  return index;
};

const doLeftTrim = function(string){
  let startIndex = absoluteIndex(string,1);
  return getSubString(string,startIndex,getLength(string));
};


