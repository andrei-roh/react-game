import React from 'react';
import styled from 'styled-components';
import gameLogo from '../assets/images/game-logo.jpg';
import animalsData from '../Game/components/animals-data';
import techData from '../Game/components/tech-data';

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
  padding: 5px;
  font-size: 18px;
  font-family: 'Averia Libre', cursive;
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
          <Button onClick={() => {this.props.updateData(animalsData)}}>Animals</Button>
          <Button onClick={() => {this.props.updateData(techData)}}>Tech</Button>
        </HeaderElement>
      </HeaderBlock>
    );
  }
};
