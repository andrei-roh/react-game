import React from 'react';
import styled from 'styled-components';
import gameLogo from '../assets/images/game-logo.jpg';
import animalsData from '../Game/components/animals-data';
import techData from '../Game/components/tech-data';
import PetsIcon from '@material-ui/icons/Pets';
import ComputerIcon from '@material-ui/icons/Computer';
import HelpIcon from '@material-ui/icons/Help';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderElement = styled.div`
  padding: 10px 15px 15px
`;

const Button = styled.button`
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px;
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
`;

export class Header extends React.Component {
  render() {
    return (
      <HeaderBlock>
        <HeaderElement>
          <a href='.'>
            <img width='80px' src={gameLogo} alt='gameLogo' />
          </a>
        </HeaderElement>
        <HeaderElement>
          <Button onClick={() => {this.props.updateData(animalsData)}}><PetsIcon /></Button>
          <Button onClick={() => {this.props.updateData(techData)}}><ComputerIcon /></Button>
        </HeaderElement>
        <HeaderElement>
          <Button><HelpIcon /></Button>
          <Button><VolumeUpIcon /></Button>
        </HeaderElement>
      </HeaderBlock>
    );
  }
};
