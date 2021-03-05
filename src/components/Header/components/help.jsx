import React from 'react';
import styled from 'styled-components';
import CancelIcon from '@material-ui/icons/Cancel';
import PlaySound from '../../Sound';

const PopUpHelp = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`;

const PopUpHelpInner = styled.div`
  position: absolute;
  left: 22%;
  right: 22%;
  top: 22%;
  bottom: 22%;
  margin: auto;
  background: ${(props) => (props.children[0]._owner.memoizedProps.showNight ? '#363537' : 'white')};
  padding: 10px 20px 10px;
  text-align: justify;
  display: flex;
  justify-content: space-between;
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
`;

const Caption = styled.div`
  font-size: 30px;
`;

class Help extends React.Component {
  audioButton = `https://zvukipro.com/uploads/files/2019-09/1568274526_c8fd8d10309e3e0.mp3`;
  render() {
    return (
      <PopUpHelp>
        <PopUpHelpInner>
          <Caption>Help</Caption>
          <div>Guess the Word — это простая игра.
            На экране показывается изображение предмета либо животного.
            Необходимо отгадать, что изображено и собрать из букв это слово.
            Для этого у игрока имеется Набор букв. Буквы перемещаются в Слово.
          </div>
          <div>
            При верной комбинации букв, игрок получает +1 к очкам
            и изображение меняется.
            При достижении 10 очков игрок побеждает.
            Кроме перетаскивания с помощью мыши, можно воспользоваться клавиатурой:
          </div>
          <div>TAB - для выделения буквы,</div>
          <div>SPACE - для выбора буквы,</div>
          <div>ARROWS - для перемещения буквы.</div>
          <div onClick={() => PlaySound(this.props.showSound, this.audioButton)}>
            <Button onClick={this.props.closePopup}><CancelIcon /></Button>
          </div>
        </PopUpHelpInner>
      </PopUpHelp>
    );
  }
}

export default Help;
