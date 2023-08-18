let cardBalanceReply = "";
let currency = "";
let balance = 0;
let userData = {
  'USD': 1000, 'EUR': 900, 'UAH': 15000, 'BIF': 20000, 'AOA': 100
}, bankData = {
  'USD': {
    max: 3000, min: 100, img: '💵'
  }, 'EUR': {
    max: 1000, min: 50, img: '💶'
  }, 'UAH': {
    max: 0, min: 0, img: '💴'
  }, 'GBP': {
    max: 10000, min: 100, img: '💷'
  }
};

function viewCarBalance() {
  let result;
  cardBalanceReply = confirm('View card balance?');
  if (cardBalanceReply !== null) {
    return cardBalanceReply;
  }
}

function getCurrency(userData, msg) {
  currency = prompt(msg).toUpperCase();
  while (userData[currency] === undefined) {
    currency = prompt(msg);
  }
  return currency;

}

function getAmountToGetCash(currency) {
  let amount = parseInt(prompt("Input amount of money"));
  let maxForCurrency = bankData[currency].max;
  let minForCurrency = bankData[currency].min;
  if (amount > maxForCurrency) {
    console.log(
        `Entered amount of ${currency} is more than allowed. Max value could be: ${maxForCurrency}`);
  } else if (amount < minForCurrency) {
    console.log(
        `Entered amount of ${currency} is less than allowed. Min value could be: ${minForCurrency}`);
  } else {
    console.log(`Here your money: ${amount}  ${currency}`);
  }

  return amount;

}

function getBalance(currency) {
  balance = userData[currency];
  return balance;
}

function displayAnswer(value) {
  console.log(`Your balance: currency ${currency} and balance is : ${value}`);
}

function getMoney(userData, bankData) {

  let resultPromise = new Promise((resolve, reject) => {
    viewCarBalance() === true ? resolve(userData) : reject(
        {userData: userData, bankData: bankData});
  }).then(result => {
    return getCurrency(result,
        'Enter the currency for which the balance will be: ');
  }).then(result => {
    return getBalance(result);
  })
  .then(result => {
    displayAnswer(result);
  }).catch(objectData => {
    let cur = getCurrency(objectData.userData,
        "Enter the currency to get" + " cash: ");
    getAmountToGetCash(cur);

  })
  .finally(console.log("Thanks ,have a good day"));

}

getMoney(userData, bankData);
