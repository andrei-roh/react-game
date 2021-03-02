import React from 'react';
import styled from 'styled-components';
import gameLogo from '../assets/images/game-logo.png';
import HelpIcon from '@material-ui/icons/Help';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Help from './components/help';
import PlaySound from '../Sound';

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderElement = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px 5px 15px;
`;

const Button = styled.button`
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: 'Averia Libre', cursive;
  background-color: #f3727b;
  border: 0;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.1), 0 1px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showHelp: false,
    };
  }
  toggleHelp() {
    this.setState({
      showHelp: !this.state.showHelp
    });
  }
  audioButton = `https://zvukipro.com/uploads/files/2019-09/1568274526_c8fd8d10309e3e0.mp3`

  render() {
    return (
      <HeaderBlock>
        <HeaderElement>
          <div onClick={() => PlaySound(this.props.showSound, this.audioButton)}>
            <a href='.'>
              <img width='80px' src={gameLogo} alt='gameLogo' />
            </a>
          </div>
          <div>Score: {this.props.score}</div>
        </HeaderElement>
        <HeaderElement>
          <div onClick={() => {
              PlaySound(this.props.showSound, this.audioButton);
              this.props.updateMode(this.props.showNight);
            }
          }>
            <Button>{this.props.showNight ? <Brightness2Icon /> : <WbSunnyIcon />}</Button>
          </div>
          <div onClick={() => PlaySound(this.props.showSound, this.audioButton)}>
            <Button onClick={this.toggleHelp.bind(this)}><HelpIcon /></Button>
          </div>
          <div onClick={() => {
              this.props.updateSound(this.props.showSound, this.audioButton);
              PlaySound(this.props.showSound, this.audioButton)
            }
          }>
            <Button>{this.props.showSound ? <VolumeUpIcon /> : <VolumeOffIcon />}</Button>
          </div>
        </HeaderElement>
        {this.state.showHelp ?
          <Help
            closePopup={this.toggleHelp.bind(this)}
            showSound={this.props.showSound}
          />
          : null
        }
      </HeaderBlock>
    );
  }
};
