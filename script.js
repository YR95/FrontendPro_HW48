let cardBalanceReply = "";
let currency = "";
let balance = 0;
let userData = {
      'USD': 1000,
      'EUR': 900,
      'UAH': 15000,
      'BIF': 20000,
      'AOA': 100
    },
    bankData = {
      'USD': {
        max: 3000,
        min: 100,
        img: '💵'
      },
      'EUR': {
        max: 1000,
        min: 50,
        img: '💶'
      },
      'UAH': {
        max: 0,
        min: 0,
        img: '💴'
      },
      'GBP': {
        max: 10000,
        min: 100,
        img: '💷'
      }
    };

function viewCarBalance() {
  let result;
  cardBalanceReply = confirm('View card balance?');
  if (cardBalanceReply !== null) {
    return cardBalanceReply;
  }
}

function getCurrency(userData) {
  currency = prompt('Enter the currency for which the balance will be'
      + ' displayed').toUpperCase();
  while (userData[currency] === undefined) {
    currency = prompt('Enter the currency for which the balance will be');
  }
  return currency;

}

function getBalance(currency) {
  balance = userData[currency];
  return balance;
}

function displayAnswer(value) {
  console.log(`Your balance: currency ${currency} and balance is : ${value}`);
  console.log("Thanks ,have a good day");
}

function getMoney(userData, bankData) {

  let resultPromise = new Promise((resolve, reject) => {
    viewCarBalance() === true ? resolve(userData) : "";
  }).then(result => {
    return getCurrency(result);
  }).then(result => {
    return getBalance(result);
  })
  .then(result => {
    displayAnswer(result);
  });

}

getMoney(userData, bankData);
