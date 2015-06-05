function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  var pizzaCost = 0;
  this.pizzaCost = pizzaCost;
};

Pizza.prototype.sizeCost = function () {
  if (this.pizzaSize === "large") {
    this.pizzaCost += 16;
  } else if (this.pizzaSize === "medium") {
    this.pizzaCost += 14;
  } else if (this.pizzaSize === "small") {
    this.pizzaCost += 12;
  } else {
    this.pizzaCost += 0;
  }
};
