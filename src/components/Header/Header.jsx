import React from 'react';
import styled from 'styled-components'
import gameLogo from '../assets/images/game-logo.jpg'

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderElement = styled.div`
  padding: 10px 15px 15px
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
      </HeaderBlock>
    );
  }
};
