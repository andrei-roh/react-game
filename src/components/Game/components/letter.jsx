import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  padding: 0.5px;
  border: 3px solid #f3727b;
  border-radius: 50%;
  &:focus {
    outline: none;
    border-color: lightgreen;
  }

  margin-right: 1px;

  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  width: 3vw;
  height: 3vw;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
`;

export default class Letter extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.letter.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.letter.content}
          </Container>
        )}
      </Draggable>
    );
  };
}
