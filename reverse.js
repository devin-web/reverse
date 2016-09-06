function readCmdLine(){
  var myArgs = process.argv.slice(2);
  return myArgs;
}
 //console.log('myArgs: ', myArgs);
var input = readCmdLine();
reverse( input );

function isNotANumber( inputString ){
  var returnVal = isNaN(inputString);
  return returnVal;
}

function reverse( inputStrings ){
  var reversedString = "";
  for( var i = 0; i < inputStrings.length; i++ ){
    if( isNotANumber(inputStrings[i] )){
      reversedString = reverseString( inputStrings[i] );
    }
    else {
      reversedString = inputStrings[i]; //non reversed number
    }
    console.log( reversedString );
  }
}

function reverseString( inputString ){
  var reversedString  = "";

  for( var i = inputString.length-1; i >= 0; i--){
    reversedString += inputString[i];
  }
  //console.log( "reversed string: ", reversedString );
  return reversedString;
}
