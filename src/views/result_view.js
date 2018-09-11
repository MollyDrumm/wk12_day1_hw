const PubSub = require('../helpers/pub_sub')

const ResultView = function(){

}

ResultView.prototype.displayResult = function( boolResult ) {
  let result;
  if (boolResult === true) {
    result = "Yes, this is a prime number";
  } else {
    result = "No, this is not a prime number"
  }

  const resultElement = document.querySelector("#result");
  resultElement.textContent = result;
}

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    console.log("PrimeChecker:result-calculated HAS HAPPENED");
    const wasItPrime = event.detail;
    this.displayResult(wasItPrime);
  });
}

module.exports = ResultView;
