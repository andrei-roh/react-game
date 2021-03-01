import React from 'react';
import styled from 'styled-components';
import gameLogo from '../assets/images/game-logo.jpg';
import animalsData from '../Game/components/animals-data';
import techData from '../Game/components/tech-data';
import PetsIcon from '@material-ui/icons/Pets';
import ComputerIcon from '@material-ui/icons/Computer';
import HelpIcon from '@material-ui/icons/Help';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
// import VolumeOffIcon from '@material-ui/icons/VolumeOff';
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
  padding: 10px 15px 15px
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
  color: #fff;
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
      sound: true,
    };
  }
  toggleHelp() {
    this.setState({
      showHelp: !this.state.showHelp
    });
  }
  render() {
    return (
      <HeaderBlock>
        <HeaderElement>
          <div onClick={PlaySound}>
            <a href='.'>
              <img width='80px' src={gameLogo} alt='gameLogo' />
            </a>
          </div>
        </HeaderElement>
        <HeaderElement>
          <div onClick={PlaySound}>
            <Button onClick={() => {this.props.updateData(animalsData)}}><PetsIcon /></Button>
          </div>
          <div onClick={PlaySound}>
            <Button onClick={() => {this.props.updateData(techData)}}><ComputerIcon /></Button>
          </div>
        </HeaderElement>
        <HeaderElement>
          <div onClick={PlaySound}>
            <Button onClick={this.toggleHelp.bind(this)}><HelpIcon /></Button>
          </div>
          <div onClick={PlaySound}>
            <Button><VolumeUpIcon /></Button>
          </div>
        </HeaderElement>
        {this.state.showHelp ?
          <Help
            closePopup={this.toggleHelp.bind(this)}
          />
          : null
        }
      </HeaderBlock>
    );
  }
};
