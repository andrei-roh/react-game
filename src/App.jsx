import React from 'react';
import styled from 'styled-components'
import animalsData from './components/Game/components/animals-data';
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
  state = {
    dataType: animalsData
  };

  updateData = (value) => {
    this.setState({ dataType: value });
  };

  render() {
    return (
      <BigBlock>
        <Header updateData={this.updateData} />
        <Game dataType={this.state.dataType} />
        <Footer />
      </BigBlock>
    );
  }
};
