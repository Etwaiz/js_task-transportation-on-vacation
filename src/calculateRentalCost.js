/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;
  const price = days * 40;

  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  const finalCost = price - discount;

  return finalCost;
}

module.exports = calculateRentalCost;
