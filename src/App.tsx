import React from 'react';
import MenuContainer from './containers/MenuContainer';
import MenuMonadContainer from './containers/MenuMonadContainer'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <MenuContainer />
      <MenuMonadContainer />
    </div>
  );
}

export default App;
