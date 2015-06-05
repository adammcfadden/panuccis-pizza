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
    if (value === "pepperoni" || value === "sausage" || value === "ham" || value === "hamburger" || value === "red pepper") {
      toppingCost += 1
    }
    if (value === "green onion" || value === "green pepper" || value === "spinach" || value === "tomatoe" || value === "pesto" || value === "onion") {
      toppingCost += 0.50
    }

    if (value === "avocado" || value === "anchovies" || value === "extra cheese" || value === "bacon" || value === "salami") {
      toppingCost += 1.50
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

Order.prototype.orderCost = function () {
  var orderCost = 0
  this.pizzas.forEach(function (pizza) {
    orderCost += pizza.pizzaCost;
  });
  return orderCost
};
