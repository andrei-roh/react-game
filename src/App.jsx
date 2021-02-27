import React from 'react';
import styled from 'styled-components'
import { Header } from './components/Header/Header';
import { Game } from './components/Game/Game';
import { Footer } from './components/Footer/Footer';

const BigBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Averia Libre', cursive;
`;

export class App extends React.Component {
  render() {
    return (
      <BigBlock>
        <Header />
        <Game />
        <Footer />
      </BigBlock>
    );
  }
};
