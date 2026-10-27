export default function MenuCards({ emoji, title, description, price }) {
  const handlePurchase = (e) => {
    e.innerHTML = "Purchased"
    e.style.background='#1eab0f'
  };

  return (
    <div className="card">
      <div className="card-emoji">{emoji}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price">${price}</div>
      <div className="button">Order Now</div>
      <button
        className="button"
        onClick={handlePurchase}
        style={{ backgroundColor: isPurchased ? "green" : "#a45e35" }}
      >
        {buttonText}
      </button>
    </div>
  );
}
