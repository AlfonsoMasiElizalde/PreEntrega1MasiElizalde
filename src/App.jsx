import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'

function App() {

  return (
    <div class="nav-container">
      <NavBar />
      <ItemListContainer bienvenida={"Bienvenidos al Maxikiosco Don Pepe! Soy un ItemListContainer :)"}/>
    </div>
  )
}

export default App
