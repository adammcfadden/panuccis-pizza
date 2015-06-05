describe('Pizza', function() {
  it("will create a pizza with the specified toppings, and size. Will return pizzaSize.", function() {
    var testPizza = new Pizza("large", ["pepperoni", "sausage", "ham"]);
    expect(testPizza.pizzaSize).to.equal("large");
  });

  it("will create a pizza with the specified toppings, and size. Will return toppings.", function() {
    var testPizza = new Pizza("large", ["pepperoni", "sausage", "ham"]);
    expect(testPizza.toppings).to.eql(["pepperoni", "sausage", "ham"]);
  });

  it("will return the initial cost of the pizza.", function() {
    var testPizza = new Pizza("large", ["pepperoni", "sausage", "ham"]);
    expect(testPizza.pizzaCost).to.eql(0);
  });

  it("will check the size of the pizza and adjust the cost correctly", function() {
    var testPizza = new Pizza("large", ["pepperoni", "sausage", "ham"]);
    testPizza.sizeCost()
    expect(testPizza.pizzaCost).to.eql(16);
  })
});


// describe('Order', function() {
//   it('will store all pizza objects', function() {
//     var testPizza = new Pizza("large", ["pepperoni", "sausage", "ham"]);
//
//   });
// });
