import logo from './logo.svg';
import './App.css';
import Nav from './componente/Nav.js'
import Card from './componente/Card.js'
import styles from './componente/Estilo.module.css'
import Biblioteca from './componente/Biblioteca.js';
function App() {
  return (
    <div className="App">
      <Nav/>
      <p className={styles.pprincipal} >jogo de bomba </p>
      <div className={styles.card}>
      <Biblioteca/>
      </div>
    </div>
  );
}

export default App;
