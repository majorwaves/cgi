import React from 'react';
import styled from 'styled-components';
import map from '../images/footer-map.svg'

const Foot = styled.footer`
  padding: 3rem 5vw;
  background: ${props => props.theme.color.dark};
  color: white;
  display: flex;
  justify-content: space-between;
  font-family: ${props=> props.theme.type.sans};
`;

const Location = styled.div`
  font-size: 14px;
  line-height: 1em;

  h4 {
    font-family: ${props=> props.theme.type.heading};
  }

  p {
    font-family: ${props=> props.theme.type.sans};
  }
`;

const Map = styled.div`
`;

const Footer = (props) => (
  <Foot>
    <Location>
      <h4>Miami — Head Office</h4>
      <p>801 Brickell Avenue, Suite 700</p>
      <p>Miami, Florida 33131</p>
      <br/>
      <p>T: 786-581-4800</p>
      <p>F: 786-523-0590</p>
    </Location>
    <Location>
      <h4>New York</h4>
      <p>1271 Avenue of the Americas 43rd Floor</p>
      <p>New York, New oYOrk 10020</p>
      <br/>
      <p>T: 212-292-3719</p>
    </Location>
    <Location>
      <h4>Chicago</h4>
      <p>892 Fairview Road</p>
      <p>Chicago, Illinois, 60035</p>
      <br/>
      <p>T: 312-925-6537</p>
    </Location>
    <Map>
      <img src={map} alt='map' />
    </Map>
  </Foot>
);

export default Footer;
