describe('Pizza', function() {
  it("will create a pizza and set the specified size. Will return pizzaSize.", function() {
    var testPizza = new Pizza();
    testPizza.setSize("large");
    expect(testPizza.pizzaSize).to.equal("large");
  });

  it("will create a pizza and add the specified toppings, and size. Will return toppings.", function() {
    var testPizza = new Pizza();
    testPizza.addTopping("pepperoni")
    expect(testPizza.toppings).to.eql(["pepperoni"]);
  });

  it("will return the initial cost of the pizza.", function() {
    var testPizza = new Pizza();
    expect(testPizza.pizzaCost).to.eql(0);
  });

  it("will check the size of the pizza and adjust the cost correctly", function() {
    var testPizza = new Pizza();
    testPizza.setSize("large");
    testPizza.sizeCost();
    expect(testPizza.pizzaCost).to.equal(16);
  });

  it("will check the size of the pizza and adjust the cost correctly, for $1.00 items", function() {
    var testPizza = new Pizza();
    testPizza.addTopping("ham")
    testPizza.addTopping("sausage")
    testPizza.addTopping("pepperoni")
    testPizza.toppingsCost();
    expect(testPizza.pizzaCost).to.equal(3);
  });

  it("will check the size of the pizza and adjust the cost correctly, including $0.50 items", function() {
    var testPizza = new Pizza();
    testPizza.addTopping("onion")
    testPizza.addTopping("sausage")
    testPizza.addTopping("pesto")
    testPizza.addTopping("green onion")
    testPizza.toppingsCost();
    expect(testPizza.pizzaCost).to.equal(2.5);
  });

  it("will check the size of the pizza and adjust the cost correctly, including $1.50 items", function() {
    var testPizza = new Pizza();
    testPizza.addTopping("avocado")
    testPizza.addTopping("salami")
    testPizza.addTopping("ham")
    testPizza.addTopping("green onion")
    testPizza.toppingsCost();
    expect(testPizza.pizzaCost).to.equal(4.5);
  });
});

describe('Order', function() {
  it('will store all pizza objects', function() {
    var testPizza = new Pizza();
    testPizza.setSize("large");
    testPizza.addTopping("ham")
    testPizza.addTopping("pepperoni")
    var testPizza2 = new Pizza();
    testPizza2.setSize("small");
    testPizza2.addTopping("sausage")
    var testOrder = new Order();
    testOrder.addPizza(testPizza);
    testOrder.addPizza(testPizza2);
    expect(testOrder.pizzas).to.eql([testPizza, testPizza2]);
  });

  it('will return the cost of an entire order', function() {
    var testPizza = new Pizza();
    testPizza.setSize("large");
    testPizza.addTopping("ham")
    testPizza.addTopping("pepperoni")
    testPizza.toppingsCost();
    testPizza.sizeCost();
    var testPizza2 = new Pizza();
    testPizza2.setSize("small");
    testPizza2.addTopping("sausage")
    testPizza2.toppingsCost();
    testPizza2.sizeCost();
    var testOrder = new Order();
    testOrder.addPizza(testPizza);
    testOrder.addPizza(testPizza2);
    testOrder.pizzaCost();
    expect(testOrder.orderCost).to.equal(31)
  });

  it ('will add a delivery charge to the order', function() {
    var testPizza = new Pizza();
    testPizza.setSize("large");
    testPizza.addTopping("ham")
    testPizza.addTopping("pepperoni")
    testPizza.toppingsCost();
    testPizza.sizeCost();
    var testPizza2 = new Pizza();
    testPizza2.setSize("small");
    testPizza2.addTopping("sausage")
    testPizza2.toppingsCost();
    testPizza2.sizeCost();
    var testOrder = new Order();
    testOrder.addPizza(testPizza);
    testOrder.addPizza(testPizza2);
    testOrder.pizzaCost();
    testOrder.addDelivery();
    expect(testOrder.orderCost).to.equal(34)
  });

  it ('will suggest a tip based on a selected percentage', function() {
    var testPizza = new Pizza();
    testPizza.setSize("large");
    testPizza.addTopping("ham")
    testPizza.addTopping("pepperoni")
    testPizza.toppingsCost();
    testPizza.sizeCost();
    var testPizza2 = new Pizza();
    testPizza2.setSize("small");
    testPizza2.addTopping("sausage")
    testPizza2.toppingsCost();
    testPizza2.sizeCost();
    var testOrder = new Order();
    testOrder.addPizza(testPizza);
    testOrder.addPizza(testPizza2);
    testOrder.pizzaCost();
    expect(testOrder.suggestTip(0.15)).to.equal("4.65")
  });

  it('will return an output cost as a string with two decimal places.', function () {
    var testPizza = new Pizza();
    testPizza.setSize("large");
    testPizza.addTopping("ham")
    testPizza.addTopping("pepperoni")
    testPizza.toppingsCost();
    testPizza.sizeCost();
    var testPizza2 = new Pizza();
    testPizza2.setSize("small");
    testPizza2.addTopping("sausage")
    testPizza2.toppingsCost();
    testPizza2.sizeCost();
    var testOrder = new Order();
    testOrder.addPizza(testPizza);
    testOrder.addPizza(testPizza2);
    testOrder.pizzaCost();
    expect(testOrder.roundedCost()).to.equal('31.00')
  });
});
