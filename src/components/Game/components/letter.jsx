import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  padding: 8px;
  border: 3px solid lightgrey;
  border-radius: 50%;
  &:focus {
    outline: none;
    border-color: red;
  }

  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  width: 3vw;
  height: 3vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Letter extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.letter.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div style={{marginLeft: this.props.letter.width + 'vw', marginRight: this.props.letter.width + 'vw' }}>
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              {this.props.letter.content}
            </Container>
          </div>
        )}
      </Draggable>
    );
  };
}
