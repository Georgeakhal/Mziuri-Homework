import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuCard from "./components/MenuCard";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="menu">
        <h2>Our Favorites</h2>
        <div className="card-list">
          <MenuCard 
            emoji="☕" 
            title="Classic Latte" 
            description="Smooth and creamy coffee made with fresh milk." 
            price="4.50" 
          />
          <MenuCard 
            emoji="🥐" 
            title="Fresh Croissant" 
            description="A golden, buttery pastry baked fresh every morning." 
            price="3.00" 
          />
          <MenuCard 
            emoji="🍰" 
            title="Chocolate Cake" 
            description="A rich chocolate dessert for your afternoon break." 
            price="5.00" 
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;