import React from 'react';
import styled from 'styled-components'
import authorPhoto from '../assets/images/author.jpg'
import schoolLogo from '../assets/images/rs_school_js.svg'

const FooterBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FooterElement = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`;

export class Footer extends React.Component {
  render() {
    return (
      <FooterBlock>
        <FooterElement>
          <a href='https://github.com/andrei-roh'>
            <img width='30px' src={authorPhoto} alt='author' />
          </a>
        </FooterElement>
        <FooterElement>
          <a href='https://rs.school/js/'>
            <img width='30px' src={schoolLogo} alt='course' />
          </a>
        </FooterElement>
        <FooterElement>2021</FooterElement>
      </FooterBlock>
    );
  }
};
