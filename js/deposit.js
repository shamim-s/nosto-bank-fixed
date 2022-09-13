// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function (){
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
  */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  /* 

    1. get previous deposit total by id

  */
  const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total

  if(newDepositAmount < 10){
    alert('minimus deposit amount is 10');
  }else if(isNaN(newDepositAmount)){
    alert('Please inter any number');
  }else{
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById("deposit-total", newDepositTotal);

    const previousBalanceTotal = getTextElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
  }
  // set deposit total value
  

  // get previous balance by using the function
  
});
