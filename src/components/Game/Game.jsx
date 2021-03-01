import React from 'react';
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './components/initial-data';
import Column from './components/column';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GameBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageBlock = styled.div`
  border: 12px solid #f3727b;
  height: 133px;
`;

export class Game extends React.Component {
  state = initialData;
  dataState = this.props.dataType;
  shuffle = this.state.columns.column1.letterIds.sort(() => Math.round(Math.random() * 100) - 50);
  changeData = this.dataState.list[Math.floor(Math.random() * this.dataState.list.length)];

  onDragStart = () => {
    document.body.style.transition = 'background-color 0.2s ease';
    const audio = new Audio();
    audio.src = `https://zvukipro.com/uploads/files/2019-09/1568274526_c8fd8d10309e3e0.mp3`;
    audio.play();
  }

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = `inherit`;

    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

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

    const finishLetterIds = Array.from(finish.letterIds);
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
      console.log('WIN')
    }
    const audio = new Audio();
    audio.src = `https://zvukipro.com/uploads/files/2019-09/1568274526_c8fd8d10309e3e0.mp3`;
    audio.play();

  }

  render() {
    // console.log(this.props.dataType)
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
