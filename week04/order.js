// ERROR: ReferenceError on line 7 - "discount" is not defined.
// Root cause: discount variable was never declared before being used.
// Fix: define a discount value before using it.

console.info("Order processing program started.");

const discount = 10;

function calculateTotal(price, quantity) {
  return price * quantity;
}

function applyDiscount(total) {
  if (total > 100) {
    console.warn("Discount applied because total exceeded $100.");
    return total - discount;
  }
  console.info("No discount applied because total did not exceed $100.");
  return total;
}

function processOrder(price, quantity) {
  // Validate inputs (meaningful error + throw)
  if (typeof price !== "number" || typeof quantity !== "number") {
    console.error("Invalid input type: price and quantity must be numbers.");
    throw new TypeError("Price and quantity must be numbers.");
  }

  if (price < 0 || quantity < 0) {
    console.error("Invalid input: price and quantity must be non-negative.");
    throw new RangeError("Price and quantity must be non-negative.");
  }

  console.info(`Inputs received -> Price: ${price}, Quantity: ${quantity}`);

  const total = calculateTotal(price, quantity);
  console.info(`Calculated total before discount: ${total}`);

  const discounted = applyDiscount(total);
  const finalResult = discounted.toFixed(2);

  console.info(`Final processed result: ${finalResult}`);
  return finalResult;
}

module.exports = {
  calculateTotal,
  applyDiscount,
  processOrder
};

// Keep this runnable directly, but avoid printing during Jest runs
if (require.main === module) {
  console.log(processOrder(25, 5));
}