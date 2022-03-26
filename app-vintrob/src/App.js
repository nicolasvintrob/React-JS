/* import logo from './logo.svg'; */
/* import './App.css'; */
import Avatar from '../src/components/Components /Avatar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Gracias por elegirnos" />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nicolas Vintrob
        </a> */}
      </header>
     {/*  <Avatar /> */}
    </div>
  );
}

export default App;
