import React from 'react';
import { Game } from './components/Game/Game';
import { Footer } from './components/Footer/Footer';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
        <Footer />
      </div>
    );
  }
};
