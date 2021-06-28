import React from 'react';
import styled from 'styled-components';
import gameVictory from '../../assets/images/victory.png';

const PopUpVictory = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopUpVictoryInner = styled.div`
  position: absolute;
  left: 10%;
  right: 10%;
  top: 5%;
  bottom: 5%;
  margin: auto;
  background: white;
  padding: 10px 10px 10px;
  text-align: justify;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Caption = styled.div`
  font-size: 30px;
  color: black;
`;

class Victory extends React.Component {
  render() {
    return (
      <PopUpVictory onClick={this.props.closePopup}>
        <PopUpVictoryInner>
          <Caption>YOU WIN, {this.props.name}!</Caption>
          <div>
            <img width="75%" src={gameVictory} alt="gameVictory" />
          </div>
        </PopUpVictoryInner>
      </PopUpVictory>
    );
  }
}

export default Victory;
