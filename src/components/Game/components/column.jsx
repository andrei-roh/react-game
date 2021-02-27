import React from 'react';
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd';
import Letter from './letter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 8px;
`;
const Title = styled.h3`
  padding: 8px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
`;
const LetterList = styled.div`
  transition: background-color 0.2s ease;
  min-height: 5vw;
  display: flex;
  justify-content: center;
  overflow: hidden;
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
