function Pizza() {
  var pizzaSize = ""
  this.pizzaSize = pizzaSize;
  var toppings = [];
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
      toppingCost += 1;
    }
    if (value === "green onion" || value === "green pepper" || value === "spinach" || value === "tomatoe" || value === "pesto" || value === "onion") {
      toppingCost += 0.50;
    }

    if (value === "avocado" || value === "anchovies" || value === "extra cheese" || value === "bacon" || value === "salami") {
      toppingCost += 1.50;
    }
  });
  this.pizzaCost += toppingCost;
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
  this.orderCost += pizzaOrderCost;
};

Order.prototype.addDelivery = function () {
  this.orderCost += 3;
};

Order.prototype.suggestTip = function (percent) {
  return (this.orderCost * percent).toFixed(2);
};

Order.prototype.roundedCost = function () {
  return (this.orderCost).toFixed(2);
};

$(function(){
    var order = new Order();
    var orderCost = order.orderCost;
  $("#order-a-pizza-button").click(function() {

    $("#order-form").slideDown("slow");
    $("#order-a-pizza-button").slideUp("slow");
  });

  $("#add-this-pizza").click(function(event) {
    event.preventDefault();

    var inputSize = $("select#pizza-size").val()
    var inputToppings = [];
    $("input:checked").each(function(){
      inputToppings.push(($(this).val()));
    });
    var pizza = new Pizza();
    pizza.setSize(inputSize);
    inputToppings.forEach(function(topping) {
      pizza.addTopping(topping);
    });
    pizza.toppingsCost();
    pizza.sizeCost();
    order.addPizza(pizza);
    $("#add-this-pizza").hide();
    $("#add-another-pizza").show();
    $("#place-order").show();
  });

  $("#add-another-pizza").click(function(event) {
    event.preventDefault();


    order.pizzaCost();
    $("input:checkbox").removeAttr('checked');
    $('select').prop('selectedIndex',0);
    $("#add-this-pizza").show();
    $("#add-another-pizza").hide();
    $("#place-order").hide();
  });

  $("#place-order").click(function(event) {
    event.preventDefault();

    order.pizzaCost();
    $("#order-form").slideUp("slow");
    $("#delivery").show("slow");
  });

  $("#delivery-yes").click(function(event) {
    event.preventDefault();

    order.addDelivery();
    $("#order-details-price").text("The total is: $" + order.roundedCost())
    $("#order-details-delivery").text("Delivery: Yes - $3.00");
    for (var i = 0; i < order.pizzas.length; i++) {
      $("#order-details-pizza").append(order.pizzas[i].pizzaSize + " with " + order.pizzas[i].toppings.join(", ") + " - $" + order.pizzas[i].pizzaCost.toFixed(2) + ".<br>")
    }

    $("#order-details").slideDown("slow");
    $("#delivery").slideUp("slow");
  });

  $("#delivery-no").click(function(event) {
    event.preventDefault();
    $("#order-details-price").text("The total is: $" + order.roundedCost());
    $("#order-details-delivery").text("Delivery: No");
    for (var i = 0; i < order.pizzas.length; i++) {
      $("#order-details-pizza").append(order.pizzas[i].pizzaSize + " with " + order.pizzas[i].toppings.join(", ") + " - $" + order.pizzas[i].pizzaCost.toFixed(2) + ".<br>")
    }


    $("#order-details").slideDown("slow");
    $("#delivery").slideUp("slow");
  });

  $(".page-header").click(function() {
    location.reload();
  });
});
