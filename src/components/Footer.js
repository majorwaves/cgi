import React from 'react';
import styled from 'styled-components';
import map from '../images/footer-map.svg'

const Foot = styled.footer`
  padding: 3rem 5vw;
  background: ${props => props.theme.color.dark};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const Map = styled.div`
`;

const Footer = (props) => (
  <Foot>
    <ul>
    </ul>
    <ul>
    </ul>
    <Map>
      <img src={map} alt='map' />
    </Map>
  </Foot>
);

export default Footer;
