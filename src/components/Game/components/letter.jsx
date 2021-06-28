import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  padding: 0.5px;
  border: 3px solid #f3727b;
  border-radius: 35%;
  margin-right: 1px;
  margin-top: 1px;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'inherit')};
  width: 2vw;
  height: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: lightgreen;
  }

  &:hover {
    box-shadow: 0 5px 20px -3px rgba(0, 0, 0, 0.1), 0 1px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &:active {
    width: 2.9vw;
    height: 2.9vw;
  }
`;

class Letter extends React.Component {
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
  }
}

export default Letter;
