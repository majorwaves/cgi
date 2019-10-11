import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PageHeaderSlider from '../components/PageHeaderSlider'
import image from '../images/foundation-1.jpg'
import image2 from '../images/foundation-2.jpg'

const Wrapper = styled.div`

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 90vw;
  max-width: 1000px;
  margin: 6rem auto;
  grid-gap: 4rem;

  div {
    img {
      width: 100%;
    }

    h4 {
      color: #6EA558;
      font-size: 12px;
      margin: 0.5rem 0 0;
    }

    p {
      font-size: 20px;
      margin-top: 0.5rem;
      color: ${props => props.theme.color.dark};
      font-family: ${props => props.theme.type.heading};
    }
  }
`;


class Foundation extends Component {

  render() {
    return (
      <Wrapper>
        <Helmet title='CGI | Foundation' />
        <PageHeaderSlider
          image={image}
          secondImage={image2}
          title='By Isabella Alycia'
          text='The story of the Isabella Alycia Foundation is about empowering students and mothers'
        />
        <Grid>
          <div>
            <img src='https://sites.clinton-foundation.org/wp-content/uploads/2019/05/cgi-thumb-square-600x600.jpg' alt='fdsfdsdffsfsd' />
            <h4>CREATING ECONOMIC OPPORTUNITY</h4>
            <p>Etiam dictum nibh quam, sit amet hendrerit felis facilisis eu</p>
          </div>
          <div>
            <img src='https://sites.clinton-foundation.org/wp-content/uploads/2019/05/cdi-thumb-square-600x600.jpg' alt='fdsfsds' />
            <h4>CREATING ECONOMIC OPPORTUNITY</h4>
            <p>Etiam dictum nibh quam, sit amet hendrerit felis facilisis eu</p>
          </div>
          <div>
            <img src='https://sites.clinton-foundation.org/wp-content/uploads/2019/05/chmi-thumb-square-600x600.jpg' alt='dfsfds' />
            <h4>CREATING ECONOMIC OPPORTUNITY</h4>
            <p>Etiam dictum nibh quam, sit amet hendrerit felis facilisis eu</p>
          </div>
          <div>
            <img src='https://sites.clinton-foundation.org/wp-content/uploads/2019/05/2PM8725-1-600x600.jpg' alt='fsdfs' />
            <h4>CREATING ECONOMIC OPPORTUNITY</h4>
            <p>Etiam dictum nibh quam, sit amet hendrerit felis facilisis eu</p>
          </div>
          <div>
            <img src='https://sites.clinton-foundation.org/wp-content/uploads/2019/05/cci-thumb-square-600x600.jpg' alt='dictum' />
            <h4>CREATING ECONOMIC OPPORTUNITY</h4>
            <p>Etiam dictum nibh quam, sit amet hendrerit felis facilisis eu</p>
          </div>
          <div>
            <img src='https://sites.clinton-foundation.org/wp-content/uploads/2019/05/ahg-thumb-square-600x600.jpg' alt='facilisis' />
            <h4>CREATING ECONOMIC OPPORTUNITY</h4>
            <p>Etiam dictum nibh quam, sit amet hendrerit felis facilisis eu</p>
          </div>
        </Grid>
      </Wrapper>
    );
  }

}

export default Foundation;
