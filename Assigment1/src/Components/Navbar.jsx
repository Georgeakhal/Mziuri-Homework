export default function Navbar() {
  const handleNavLink = (e) => {

    e.preventDefault();
    e.preventDefault();

    const links = document.querySelectorAll(".nav-links a");
    links.forEach((item) => {
      item.style.color = "white";
      item.style.textDecoration = "none";
    });
    e.target.style.color = "#5b13cf";
    e.target.style.textDecoration = "underline";

  };

  return (
    <nav className="navbar">
      <div className="logo">☕ Sunny Side</div>

      <ul className="nav-links">
        <li>
          <a href="#" onClick={handleNavLink}>Home</a>
        </li>
        <li>
          <a href="#"  onClick={handleNavLink}>Menu</a>
        </li>
        <li>
          <a href="#"  onClick={handleNavLink}>About</a>
        </li>
        <li>
          <a href="#"  onClick={handleNavLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
