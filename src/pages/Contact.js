import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { device } from '../utils/devices'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Helmet from 'react-helmet'

const Wrapper = styled.div`
  width: 80vw;
  margin: 4rem auto;

  @media ${device.laptop}{
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 3fr;
    grid-template-columns: 1fr 3fr;
    grid-gap: 5vw;
  }
`

const Form = styled.form`
  margin-top: 1rem;
  margin-left: 5vw;
  -ms-grid-column: 2;

  @media ${device.laptop}{
    padding: 1rem;
    margin: 0;
  }

  @supports (display: grid) {
    margin-left: 0;
  }

  p {
    font-size: 14px;
    color: ${props => props.theme.color.dark};
  }

  a {
    color: ${props => props.theme.color.medium};
    text-decoration: none;
  }

  h2 {
    font-size: 36px;
    margin: 0 0 2rem 0;
    color: ${props => props.theme.color.dark};
    font-family: ${props => props.theme.type.heading};
  }

  button {
    width: 100%;
    text-align: center;
    display: inline-block;
    padding: 1rem 2rem;
  }
`;

const Input = styled.input`
  appearance: none;
  padding: 1rem;
  border: 1px solid rgba(0,0,0,0.12);
  margin-bottom: 1rem;
  display: block;
  box-sizing: border-box;
  min-width: 300px;
  width: 100%;
  font-size: 16px;
  border-radius: 4px;
  font-family: ${props => props.theme.type.body};

  &::placeholder {
    font-size: 16px;
  }
`;

const TextArea = styled.textarea`
  appearance: none;
  padding: 1rem;
  border: 1px solid rgba(0,0,0,0.12);
  margin-bottom: 1rem;
  display: block;
  box-sizing: border-box;
  min-width: 300px;
  font-size: 16px;
  width: 100%;
  border-radius: 4px;
  font-family: ${props => props.theme.type.body};

  &::placeholder {
    font-size: 16px;
  }
`;

const Info = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.12);

  @media ${device.laptop}{
    border-bottom: 0;
    border-right: 1px solid rgba(0,0,0,0.12);
    padding-right: 2rem;
  }

  div {
    margin-bottom: 3rem;

    h4 {
      font-size: 18px;
      font-family: ${props => props.theme.type.heading};
    }
  }
`
const encode = (data) => {
   return Object.keys(data)
       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
       .join("&");
 }

class Contact extends Component {

  state = {
    email: '',
    name: '',
    company: '',
    job_title: '',
    message: ''
  }

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value })
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => toast.success('Message sent!'))
      .catch(error => toast.error(error));
    e.preventDefault();
  };

  render() {
    return (
      <Wrapper>
        <Helmet title='CGI | Contact' />
        <Info>
        <div>
          <h4>Miami — Head Office</h4>
          <p>801 Brickell Avenue, Suite 700</p>
          <p>Miami, Florida 33131</p>
          <p>T: 786-581-4800</p>
          <p>F: 786-523-0590</p>
        </div>
        <div>
          <h4>New York</h4>
          <p>800 3rd Avenue</p>
          <p>New York, New York 10022</p>
          <p>T: 212-220-4047</p>
          <p>F: 786-523-0590</p>
        </div>
        </Info>
        <Form {...this.props} name='contact' onSubmit={this.handleSubmit}>
          <h2>Contact Us</h2>
          <div>
            <p><strong>Investor Contact</strong>: <a href="mailto:investor@cgimg.com">investor@cgimg.com</a></p>
            <p><strong>Head Office Tel</strong>: <a href="tel:17865814800">(786) 581 4800</a></p><br/>
          </div>
          <Input value={this.state.email} id='email' name='email' type='email' placeholder='Email address' onChange={this.handleChange} />
          <Input value={this.state.name} id='name' name='name' placeholder='Name' onChange={this.handleChange} />
          <Input value={this.state.company} id='company' name='company' placeholder='Company Name' onChange={this.handleChange} />
          <Input value={this.state.job_title} id='job_title' name='job_title' placeholder='Job Title' onChange={this.handleChange} />
          <TextArea value={this.state.message} id='message' name='message' placeholder='Enter your message' rows={5} onChange={this.handleChange} />
          <Button type='submit'>Submit</Button>
        </Form>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover
          />
      </Wrapper>
    );
  }

}

export default Contact;
