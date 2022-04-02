/* import logo from './logo.svg'; */
/* import './App.css'; */
import { useState } from 'react'
import Avatar from '../src/components/Components /Avatar'
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, routers, route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  /* const onAdd = (quantity) => {
    console.log(quantity)
  } */

  return (
    <div className="App">
{/*       <NavBar />
      <ItemListContainer greeting="Gracias por elegirnos" />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      <header className="App-header">
      </header> */}
      <BrowserRouter>
      <NavBar />
      <routes>
        <route path= '/' element={<ItemListContainer />
        <route path= '/category/:categoryId' element={<ItemListContainer />
        <route path='/item/:id' element={<ItemDetailContainer />} />
      </routes>
      </BrowserRouter>
      <p>2022 Card</p>

    </div>
  );
}

export default App;
