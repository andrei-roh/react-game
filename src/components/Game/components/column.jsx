import React from 'react';
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd';
import Letter from './letter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #f3727b;
  padding: 12px;
  margin: 8px;
`;
const Title = styled.h3`
  padding: 8px;
  text-align: center;
  color: #0ad8ff;
`;
const LetterList = styled.div`
  transition: background-color 0.2s ease;
  min-height: 5vw;
  display: flex;
`;

export default class column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} direction="horizontal">
          {(provided) => (
            <LetterList ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.letters.map((letter, index) => (
                <Letter key={letter.id} letter={letter} index={index} />
              ))}
              {provided.placeholder}
            </LetterList>
          )}
        </Droppable>
      </Container>
    );
  }
}
