export default function MenuCards({ emoji, title, description, price }) {
  const handlePurchase = (e) => {
    console.log(e.innerHTML);
    e.innerHTML = "Purchased";
    e.target.style.backgroundColor = "#1eab0f";
  };

  return (
    <div className="card">
      <div className="card-emoji">{emoji}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price">${price}</div>
      <div className="button" onClick={handlePurchase}>
        Order Now
      </div>
    </div>
  );
}
