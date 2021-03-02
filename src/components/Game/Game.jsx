import React from 'react';
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './components/initial-data';
import gameData from './components/game-data';
import Column from './components/column';
import PlaySound from '../Sound';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GameBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ImageBlock = styled.div`
  border: 6px solid #f3727b;
  height: 133px;
`;

export class Game extends React.Component {
  state = initialData;
  shuffle = this.state.columns.column1.letterIds.sort(() => Math.round(Math.random() * 100) - 50);

  dataState = gameData;
  changeData = this.dataState.list[Math.floor(Math.random() * this.dataState.list.length)];

  audioStartTurn = `https://zvukipro.com/uploads/files/2020-03/1585120872_mb_card_deal_08.mp3`
  audioEndTurn = `https://zvukipro.com/uploads/files/2020-03/1585121168_playing_cards_deck_set_down_on_table_20495.mp3`
  audioWin = `https://zvukipro.com/uploads/files/2020-11/1604629147_7ddf02d658682f1.mp3`

  changeImage = (array) => {
    return array.list[Math.floor(Math.random() * array.list.length)]
  };

  onDragStart = () => {
    document.body.style.transition = 'background-color 0.2s ease';
    PlaySound(this.props.showSound, this.audioStartTurn);
  };

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = `inherit`;
    PlaySound(this.props.showSound, this.audioEndTurn);

    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    };

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    };

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    //Moving inside container
    if (start === finish) {
      const newLetterIds = Array.from(start.letterIds);
      newLetterIds.splice(source.index, 1);
      newLetterIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        letterIds: newLetterIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        }
      };

      this.setState(newState);
      return;
    }

    //Moving between containers
    const startLetterIds = Array.from(start.letterIds);
    startLetterIds.splice(source.index, 1);
    const newStart = {
      ...start,
      letterIds: startLetterIds,
    };

    let finishLetterIds = Array.from(finish.letterIds);
    finishLetterIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      letterIds: finishLetterIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);

    let gameResult = newFinish.letterIds.map(letterId => this.state.letters[letterId].content);
    if (gameResult.join('') === this.dataState.data.[this.changeData].answer) {
      this.props.updateScore(this.props.score);
      PlaySound(this.props.showSound, this.audioWin);

      this.dataState = this.props.dataType;
      this.changeData = this.props.dataType.list[Math.floor(Math.random() * this.props.dataType.list.length)];
    }
  }

  render() {
    return (
      <GameBlock>
        <ImageBlock>
          <img width='200px' src={this.dataState.data.[this.changeData].source} alt={this.dataState.data.[this.changeData].title} />
        </ImageBlock>
        <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
          <Container>
            {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const letters = column.letterIds.map(letterId => this.state.letters[letterId]);
            return <Column key={column.id} column={column} letters={letters} />;
          })}
          </Container>
        </DragDropContext>
      </GameBlock>
    );
  }
}
