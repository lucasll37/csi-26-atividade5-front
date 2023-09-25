import React from 'react';
import './App.css';
import { ListaCidades } from './components/ListaCidades';

export function App() {
  return (
    <div className="App">
      <h1>Cidades</h1>
      <h5>* Dada a solução gratuita de hospedagem utilizada, a primeira solicitação depois de um breve período de initividade é de aprox. 30 segundos</h5>
      <ListaCidades />
    </div>
  );
}