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
  var orderCost = 0;
  this.orderCost = orderCost;
}

Order.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza);
};

Order.prototype.pizzaCost = function () {
  var pizzaOrderCost = 0;
  this.pizzas.forEach(function (pizza) {
    pizzaOrderCost += pizza.pizzaCost;
  });
  this.orderCost += pizzaOrderCost
};

Order.prototype.addDelivery = function () {
  this.orderCost += 3;
};

Order.prototype.suggestTip = function (percent) {
  return (this.orderCost * percent).toFixed(2)
};

Order.prototype.roundedCost = function () {
  return (this.orderCost).toFixed(2)
};

$(function(){
  $("#picture-scroller").click(function(){
    $("div#picture-scroller").replaceWith('<div id="picture-scroller" class="col-md-4">' +
                                     "<img src='img/seymor.jpg'/>" +
                                   '</div>');
  })


});
