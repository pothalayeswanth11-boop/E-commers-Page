export default function ProductCard({ product, onAdd }) {
  return (
    <div className="productCard">
      {/* Image from URL */}
      <img
        src={product.image}
        alt={product.name}
        className="productImg"
      />

      <h3>{product.name}</h3>
      <p className="price">₹ {product.price}</p>

      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
}
