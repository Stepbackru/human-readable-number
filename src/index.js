module.exports = function toReadable (number) {
  const NUMBERS = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
  10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
  17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 
  70: 'seventy', 80: 'eighty', 90: 'ninety'}
  
  let toArr= (num) => {
    const arr = [];
    for (let i = 0; i < num.length; i+=1) 
      arr.push(num.substring(i, i + 1));
    return arr;
  }
  let numArr = [];
  if(number < 20){
    numArr.push(NUMBERS[number]);
  }else if(Math.floor(number % 100 / 10)) {
    numArr.push(NUMBERS[Math.floor(number / 10) * 10]);
  }else if(Math.floor(number / 100)) {
    numArr.push(NUMBERS[Math.floor(number / 100)] + ' hundred');
  }
  if((toArr(number.toString()).length === 2) && (Number(toArr(number.toString())[1]) !== 0) && number > 19){
    numArr.shift();
    numArr.push(NUMBERS[Number(toArr(number.toString())[0])*10]);
    numArr.push(NUMBERS[Number(toArr(number.toString())[1])]);
  }
  if((toArr(number.toString()).length === 3)){
    numArr.shift();
    numArr.push(NUMBERS[Number(toArr(number.toString())[0])] + ' hundred');
    if(Number(toArr(number.toString())[1] + toArr(number.toString())[2]) < 20){
      numArr.push(NUMBERS[Number(toArr(number.toString())[1] + toArr(number.toString())[2])])
      if(Number(toArr(number.toString())[1] + toArr(number.toString())[2]) === 0){
        numArr.pop();
      }
    } else {
      numArr.push(NUMBERS[Number(toArr(number.toString())[1]) * 10]);
      if(Number(toArr(number.toString())[2]) === 0){
        numArr.push('=)');
        let ind = numArr.indexOf('=)');
        if(ind){
          numArr.splice(ind, 1);
        }
      } else{
        numArr.push(NUMBERS[Number(toArr(number.toString())[2])]);
      }
    }
  }
  return numArr.join(' ')
}
