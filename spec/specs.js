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

  it("will check the size of the pizza and adjust the cost correctly", function() {
    var testPizza = new Pizza();
    testPizza.addTopping("ham")
    testPizza.addTopping("sausage")
    testPizza.addTopping("pepperoni")
    testPizza.toppingsCost();
    expect(testPizza.pizzaCost).to.equal(3);
  });
});


// describe('Order', function() {
//   it('will store all pizza objects', function() {
//     var testPizza = new Pizza();
//
//   });
// });
