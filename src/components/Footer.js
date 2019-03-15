import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import ContactForm from './ContactForm'
import map from '../images/footer-map.svg'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


const Foot = styled.footer`
  padding: 3rem 5vw;
  background: ${props => props.theme.color.dark};
  color: white;
  display: flex;
  justify-content: space-between;
  font-family: ${props=> props.theme.type.sans};
`;

const Col = styled.div`
  font-size: 14px;
  line-height: 1em;

  a {
    color: white;
    text-decoration: none;
  }

  h4 {
    font-family: ${props=> props.theme.type.heading};
  }

  p {
    font-family: ${props=> props.theme.type.sans};

    &.contact {
      cursor: pointer;
    }
  }
`;

const Map = styled.div`
`;

class Footer extends Component {

  state = {
    modalOpen: false
  }

  handleOpenModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  render(){
    return (
      <Foot>
        <Col>
          <h4>Miami — Head Office</h4>
          <p>801 Brickell Avenue, Suite 700</p>
          <p>Miami, Florida 33131</p>
          <br/>
          <p>T: 786-581-4800</p>
          <p>F: 786-523-0590</p>
        </Col>
        <Col>
          <h4>New York</h4>
          <p>800 3rd Avenue</p>
          <p>New York, New York 10022</p>
          <br/>
          <p>T: 212-220-4047</p>
          <p>F: 786-523-0590</p>
        </Col>
        <Col>
          <h4>Chicago</h4>
          <p>892 Fairview Road</p>
          <p>Chicago, Illinois, 60035</p>
          <br/>
          <p>T: 312-925-6537</p>
          <p>F: 786-523-0590</p>
        </Col>
        <Map>
          <img src={map} alt='map' />
        </Map>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.handleOpenModal} contentLabel='Contact' style={customStyles}>
          <ContactForm />
        </Modal>
      </Foot>
    )
  }
}

export default Footer;
