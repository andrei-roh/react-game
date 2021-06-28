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
      name: '',
      showMenu: true,
      showSound: false,
      showMusic: true,
      showNight: false,
      theme: 'light',
      score:
        localStorage.getItem('score') === '0'
          ? 0
          : Number(localStorage.getItem('score')),
    };
  }
  changeName(name) {
    this.setState({
      name: name.target.value,
    });
  }
  updateSound = (showSound) => {
    this.setState({ showSound: !showSound });
  };
  updateMusic = (showMusic) => {
    this.setState({ showMusic: !showMusic });
  };
  updateMode = (showNight) => {
    this.setState({ showNight: !showNight });
    this.state.theme === 'light'
      ? this.setState({ theme: 'dark' })
      : this.setState({ theme: 'light' });
  };
  updateScore = (score) => {
    this.setState({ score: (score += 1) });
    localStorage.setItem('score', score);
  };
  resetScore = () => {
    this.setState({ score: 0 });
    localStorage.setItem('score', 0);
  };
  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === 'light' ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <BigBlock>
          <Header
            showSound={this.state.showSound}
            showMusic={this.state.showMusic}
            showNight={this.state.showNight}
            updateSound={this.updateSound}
            updateMusic={this.updateMusic}
            updateMode={this.updateMode}
            score={this.state.score}
            resetScore={this.resetScore}
            name={this.state.name}
          />
          <Game
            showSound={this.state.showSound}
            showNight={this.state.showNight}
            score={this.state.score}
            updateScore={this.updateScore}
            resetScore={this.resetScore}
            name={this.state.name}
          />
          <Footer showNight={this.state.showNight} />
        </BigBlock>
        {this.state.showMenu ? (
          <Menu
            closePopup={this.toggleMenu.bind(this)}
            changeName={this.changeName.bind(this)}
          />
        ) : null}
      </ThemeProvider>
    );
  }
}
