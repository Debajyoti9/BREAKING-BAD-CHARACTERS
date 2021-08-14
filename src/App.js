
import React from 'react';
import '../src/App.css';
import {Route, Switch } from 'react-router-dom';
import requests from './components/request';
import BreakingBadCahracter from './components/BreakingBadCahracter';
import CharacterDetails from './components/CharacterDetails';
import CharacterContextProvider from './context/CharcterContext';

function App() {
  return (
    <div className="app">
      <h1> Breaking Bad Characters & their Quotes</h1>
      
       <Switch>
       <CharacterContextProvider fetchUrl={requests.characters} fetchQuote = {requests.quotes}>
           <Route path='/' exact component={BreakingBadCahracter}></Route>
           <Route path='/CharacterDetails' exact component={CharacterDetails}></Route>
       </CharacterContextProvider>    
       </Switch>
    </div>
  )
}

export default App;
