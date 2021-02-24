import React from 'react';
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './components/initial-data';
import ImagesData from './components/images-data';
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
  height: 120px;
`;

export class Game extends React.Component {
  state = initialData
  imageState = ImagesData

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

    if (gameResult.join('') === this.imageState.images.sheep.answer) {
      console.log('WIN')
      document.activeElement.style.backgroundColor = `lightgreen`;
    }
  }

  render() {
    return (
      <GameBlock>
        <ImageBlock>
          <img width='243px' src={this.imageState.images.sheep.source} alt={this.imageState.images.sheep.title} />
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
