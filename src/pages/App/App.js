import React, { useState, createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import { getUser } from '../../utilities/users-service';
import Home from '../Home';
// import './App.css';
import Nav from '../../components/Nav';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import PokemonPics from '../../components/PokemonPics';
export const Context = createContext();

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allPokemon, setAllPokemon] = useState([]);
  
  return (
    <Context.Provider value ={{allPokemon, setAllPokemon}}>
    <main className={styles.App}>
      { user ?
        <>
        <Nav />
          <Routes>
          <Route path="/" element={<Home/>} />
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
            <Route path="/pokemonpics" element={<PokemonPics/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
    </Context.Provider>
  );
}