import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Header } from './components/Header/Header';
import { Game } from './components/Game/Game';
import { Footer } from './components/Footer/Footer';
import { Menu } from './components/Menu';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';

const BigBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: true,
      showSound: false,
      showNight: false,
      theme: 'light',
      score: 0
    };
  };
  updateSound = (showSound) => {
    this.setState({ showSound: !showSound})
  };
  updateMode = (showNight) => {
    this.setState({ showNight: !showNight});
    this.state.theme === 'light' ? this.setState({ theme: 'dark'}) : this.setState({ theme: 'light'});
  };
  updateScore = (score) => {
    this.setState({ score: score + 1})
  };
  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <BigBlock>
        <Header
          showSound={this.state.showSound}
          showNight={this.state.showNight}
          updateSound={this.updateSound}
          updateMode={this.updateMode}
          score={this.state.score}
        />
        <Game
          showSound={this.state.showSound}
          showNight={this.state.showNight}
          score={this.state.score}
          updateScore={this.updateScore}
        />
        <Footer
          showNight={this.state.showNight}
        />
      </BigBlock>
      {this.state.showMenu ?
        <Menu
          closePopup={this.toggleMenu.bind(this)}
        />
        : null
      }
    </ThemeProvider>
    );
  }
};
