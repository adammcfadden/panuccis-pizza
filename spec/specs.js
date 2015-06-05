describe('Pizza', function() {
  it("will create a pizza with the specified toppings, and size. Will return pizzaSize.", function() {
    var testPizza = new Pizza("large", ["pepperoni", "sausage", "ham"]);
    expect(testPizza.pizzaSize).to.equal("large");
  });

  it("will create a pizza with the specified toppings, and size. Will return toppings.", function() {
    var testPizza = new Pizza("large", ["pepperoni", "sausage", "ham"]);
    expect(testPizza.toppings).to.eql(["pepperoni", "sausage", "ham"]);
  });
});

// describe('Cost', function() {
//   it ()
// });
