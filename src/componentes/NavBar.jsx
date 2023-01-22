import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav class="navbar">
        <h1 class="navbar-logo">
            <a href="index.html">Don Pepe</a>
        </h1>
        <h2 class="navbar-links">
            <ul>
                <li>
                    <a href="index.html">Inicio</a>
                </li>
                <li>
                    <a href="nosotros.html">Nosotros</a>
                </li>
                <li>
                    <a href="contactanos.html">Contáctanos</a>
                </li>
            </ul>
        </h2>
        <CartWidget />
    </nav>
  )
}

export default NavBar