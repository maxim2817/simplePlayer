import React from 'react';
import './App.scss';
import Player from './Components/Player.js';
import github_logo from './git.svg';

function App() {
  return (
    <div>
      <Player/>
      <div className="github">
        <a href="https://github.com/maxim2817/simplePlayer">
          <img src={github_logo} alt="github_logo"/>
        </a>
      </div>
    </div>
  );
}

export default App;
