// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  let cardLength = cardNumber.length;
  let discover = RegExp('^(6011|64[4-9]|65)');
  let maestro = RegExp('^(5018|5020|5038|6304)');
  let chinaUnion = RegExp('^(62[4-6]|628[2-8])');
  let switchCard = RegExp('^(4903|4905|4911|4936|564182|633110|6333|6759)');
  if((cardNumber.slice(0, 2) === '38' || cardNumber.slice(0, 2) === '39') && cardLength === 14){
  	return 'Diner\'s Club';
  }else if((cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37') && cardLength === 15){
  	return 'American Express';
  }else if((Number(cardNumber.slice(0, 6)) >= 622126 && Number(cardNumber.slice(0, 6)) <= 622925 || chinaUnion.test(cardNumber)) && (cardLength >= 16 && cardLength <= 19)){
  	return 'China UnionPay';
  }else if(switchCard.test(cardNumber) && (cardLength === 16 || cardLength === 18 || cardLength === 19)){
  	return 'Switch';
  }else if(Number(cardNumber.slice(0, 2)) >= 51 && Number(cardNumber.slice(0, 2)) <= 55  && cardLength === 16){
  	return 'MasterCard';
  }else if(cardNumber.slice(0, 1) === '4' && (cardLength === 13 || cardLength === 16 || cardLength === 19)){
  	return 'Visa';
  }else if(discover.test(cardNumber) && (cardLength === 16 || cardLength === 19)){
    return 'Discover';
  }else if(maestro.test(cardNumber) && (cardLength >= 12 && cardLength <= 19)){
    return 'Maestro';
  }
};


