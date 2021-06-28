import React from 'react';
import styled from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import GitHubIcon from '@material-ui/icons/GitHub';
import HelpIcon from '@material-ui/icons/Help';
import Help from './Header/components/help';

const PopUpMenu = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.9);
`;

const PopUpMenuInner = styled.div`
  position: absolute;
  left: 32%;
  right: 32%;
  top: 32%;
  bottom: 32%;
  margin: auto;
  background: ${(props) =>
    props.children[0]._owner.memoizedProps.showNight ? '#363537' : 'white'};
  padding: 10px 20px 10px;
  text-align: justify;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background-color: #f3727b;
  color: #fff;
  border: 0;
  border-radius: 5%;
  width: 50px;
  height: 50px;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.1), 0 1px 0px rgba(0, 0, 0, 0.1);
  }

  &:active {
    box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.1), 0 1px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    width: 49px;
    heigth: 49px;
  }
`;
const GameHead = styled.div`
  font-size: 30px;
  font-weight: 900;
`;

const MenuPoints = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 4px;
  border: solid 2px #f3727b;
  font-size: 14px;
`;

export class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      showHelp: false,
    };
  }
  toggleHelp() {
    this.setState({
      showHelp: !this.state.showHelp,
    });
  }
  render() {
    return (
      <PopUpMenu>
        <PopUpMenuInner>
          <GameHead>Guess the Word</GameHead>
          <div>Logic game</div>
          <div>
            <Input
              type="text"
              placeholder="Enter your name"
              onChange={this.props.changeName}
            />
          </div>
          <MenuPoints>
            <div>
              <Button onClick={this.props.closePopup}>
                <PlayArrowIcon />
              </Button>
            </div>
            <div>
              <form
                action="https://github.com/andrei-roh/react-game/tree/react-game"
                target="_blank"
              >
                <Button onClick={this.props.closePopup}>
                  <GitHubIcon />
                </Button>
              </form>
            </div>
            <div>
              <Button onClick={this.toggleHelp.bind(this)}>
                <HelpIcon />
              </Button>
            </div>
          </MenuPoints>
          {this.state.showHelp ? (
            <Help closePopup={this.toggleHelp.bind(this)} showSound={false} />
          ) : null}
        </PopUpMenuInner>
      </PopUpMenu>
    );
  }
}
