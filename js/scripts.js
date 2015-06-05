function Pizza() {
  var pizzaSize = ""
  this.pizzaSize = pizzaSize;
  var toppings = []
  this.toppings = toppings;
  var pizzaCost = 0;
  this.pizzaCost = pizzaCost;
};

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
}

Pizza.prototype.setSize = function (pizzaSize) {
  this.pizzaSize = pizzaSize;
};

Pizza.prototype.sizeCost = function() {
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

Pizza.prototype.toppingsCost = function() {
  var toppingCost = 0;
  this.toppings.forEach(function (value) {
    if (value === "pepperoni" || value === "sausage" || value === "ham") {
      toppingCost += 1
    }
  });
  this.pizzaCost += toppingCost
};

function Order() {
  var pizzas = [];
  this.pizzas = pizzas;
}

Order.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza);
};
