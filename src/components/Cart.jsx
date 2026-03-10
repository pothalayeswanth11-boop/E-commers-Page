function Cart({ cart, changeQuantity }) {
  // group identical items and count quantities
  const grouped = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += 1;
    } else {
      acc[item.id] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  const items = Object.values(grouped);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = cart.length;

  return (
    <div className="cart">
      <h3>Your Cart ({totalCount} {totalCount === 1 ? 'item' : 'items'})</h3>
      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.img} alt={item.name} className="cart-img" />
          <div className="cart-details">
            <p className="cart-name">{item.name}</p>
            <div className="qty-controls">
              <button onClick={() => changeQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
              <span className="cart-qty">{item.quantity}</span>
              <button onClick={() => changeQuantity(item.id, 1)}>+</button>
            </div>
            <p className="cart-price">₹ {item.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <h4>Total: ₹ {totalPrice}</h4>
    </div>
  );
}

export default Cart;
