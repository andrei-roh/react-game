import React from 'react';
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './components/initial-data';
import AnimalsData from './components/animals-data';
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
  state = initialData
  animalState = AnimalsData

  onDragStart = () => {
    document.body.style.transition = 'background-color 0.2s ease';
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
    if (gameResult.join('') === this.animalState.data.[this.changeData].answer) {
      console.log('WIN')
    }
  }

  changeData = AnimalsData.list[Math.floor(Math.random() * AnimalsData.list.length)];

    // return this.animalState.data[choiseItem].source;

  render() {
    return (
      <GameBlock>
        <ImageBlock>
          <img width='200px' src={this.animalState.data.[this.changeData].source} alt={this.animalState.data.[this.changeData].title} />
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
