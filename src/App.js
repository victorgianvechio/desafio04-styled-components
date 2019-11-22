import React from 'react';

import GlobalStyle from './styles/global';
import Header from './Components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <nav>
          <img src="https://i.imgur.com/KDIDiSE.png" alt="facebook logo" />
          <div>
            <span>Meu Perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </Header>
    </>
  );
}

export default App;
