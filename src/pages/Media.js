import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import image from '../images/bong.jpg'

const Wrapper = styled.div`
`;

const Grid = styled.div`
  width: 90vw;
  padding: 4rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  background: ${props => props.theme.color.bg};
`;

const Article = styled.div`
  background: white;

  h2 {
    font-size: 24px;
    font-weight: 500;
    font-family: ${props => props.theme.type.heading};
    padding: 2rem;
    margin: 0;
    border-bottom: 1px solid rgba(0,0,0,0.12);
    min-height: 190px;
    box-sizing: border-box;
    color: ${props => props.theme.color.dark};
  }

  div {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;

    span {
      opacity: 0.5;
      font-size: 14px;
    }
  }
`;

class Media extends Component {

  render() {
    return (
      <Wrapper>
        <PageHeader
          image={image}
          title='Media'
        />
        <Grid>
          <Article>
            <h2>CGI Merchant Group, which purchased the building in 2013 for $26.75 million, said the office portion is now completely occupied.</h2>
            <div><span>Jul 29, 2015</span><span>The Real Deal NYC</span></div>
          </Article>

          <Article>
            <h2>Photos: On the scene at ribbon cutting of 55 Miracle Mile</h2>
            <div><span>Jun 30, 2015</span><span>The Real Deal, South FL Real Estate News</span></div>
          </Article>

          <Article>
            <h2>What's Driving CGI Merchant Group Investment is South FL Real Estate?</h2>
            <div><span>Jun 16, 2015</span><span>DBR Daily Business Review</span></div>
          </Article>
          <Article>
            <h2>Raoul Thomas on finding value where others can’t</h2>
            <div><span>May 22, 2015</span><span>South Florida Business Journal</span></div>
          </Article>

          <Article>
            <h2>Executive Spotlight: Raoul Thomas, CGI Merchant Group</h2>
            <div><span>Apr 14, 2015</span><span>Commercial Property Executive</span></div>
          </Article>

          <Article>
            <h2>CGI Merchant Group Breaks Ground at 1100 Biscayne</h2>
            <div><span>Mar 14, 2015</span><span>Brickell</span></div>
          </Article>
        </Grid>
      </Wrapper>
    );
  }

}

export default Media;
