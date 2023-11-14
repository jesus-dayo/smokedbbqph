const calculateTotal = (bill) => {
  const total = bill?.orders?.items?.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    bill.shippingFee
  );
  if (bill.discountPercentage > 0) {
    return total - total * discountPercentage;
  }
  return total;
};

export { calculateTotal };
