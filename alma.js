function logger(text) {
  console.log(text)
}

/* logger (positivOrNegative(0)) */

function decideIfBeerIsGood(beer) {
  if (beer.price < 340 && beer.abv > 4.7) {
    return true;
  } else { return false
}
}
let dreher = { name: "Dreher", price: 349, abv: 5 };
let soproni = { name: "Soproni", price: 329, abv: 4.5 };
let borsodi = { name: "Borsodi", price: 359, abv: 4.8 };

logger(decideIfBeerIsGood(dreher))
