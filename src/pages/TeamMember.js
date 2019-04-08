import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import one from '../images/team-1.png'
import two from '../images/team-2.png'
import three from '../images/team-3.png'

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 900px;
  border-top: 1px solid rgba(0,0,0,0.12);
  padding: 4rem 0;

  p {
    line-height: 1.6em;
  }
`;

class TeamMember extends Component {

  renderTitle = () => {
    const {slug } = this.props.match.params;

    switch (slug) {
      case 'raoul-thomas':
        return 'Raoul thomas';
      case 'alejandro-araujo':
        return 'Alejandro Araujo';
      case 'mike-keilty':
        return 'Meike Keilty';
      default:
        return 'Scott Hislop';
    }
  }

  renderImage = () => {
    const {slug } = this.props.match.params;
    switch (slug) {
      case 'raoul-thomas':
        return one;
      case 'alejandro-araujo':
        return two;
      case 'mike-keilty':
        return three;
      default:

    }
  }

  renderContent = () => {
    const {slug } = this.props.match.params;

     switch (slug) {
      case 'raoul-thomas':
        return (
          <>
          <p>Combining an extensive career in global investment banking and investment advisory with a unique personal history of having lived all over the world, Raoul Thomas has utilized his knowledge and experiences to build CGI Merchant Group into a successful investment management and financial advisory firm. The Miami-based company, founded by Thomas in 2006, is a real estate and infrastructure private equity firm. The firm’s interests are closely aligned with its limited capital partners, and as a General Partner the firm has been able to provide value to its investors through creativity and an emphasis on risk management strategies.</p>
          <p>On behalf of CGI, Thomas oversees investment and asset management activities centered on a group of strategies that are currently undertaken through principal investments, which the firm invests alongside its limited partners and has fiduciary discretion as investment manager.</p>
          </>
        )
      case 'alejandro-araujo':
        return (
          <>
          <p>Has over 15 years of developing experience and 10 years as owner of AFIN Developer Group, LLC (“AFIN”). Alejandro is responsible for $15 million under management with international investors. His background not only includes developing projects but managing existing assets that he has invested in.</p>
          <p>Before starting AFIN, Alejandro was a business development director at Tradegate USA Corp (“Tradegate”) where he developed business and relationships abroad. After successfully managing to incorporate distribution channels in Latin American and European markets for Tradegate, Alejandro ventured to start AFIN. Some
of his notable development projects include a 56,000 sq. ft. office building worth $19 million, and a 30,000 sq. ft. office building located in North Miami Beach in which he was in charge of the building’s renovations and managing all relationships with governmental relations, architects, engineers, and the general contractor.</p>
          </>
        )
      case 'mike-keilt':
        return (
          <>
          <p>Mr. Keilty brings over 30 years of Executive Management experience in both the telecommunication and software business. He has led both a large FTSE 100 listed corporation as well as several startup companies with P&L responsibility for over $1B.  Mr. Keilty was Chief Executive Officer for BT’s North American division which is BT’s largest operating unit outside the UK. He successfully launched this business in the US market and grew revenues
from $20 M to more than $500 M in less than 5 years. As Chief Operating Officer of STI Mobile he launched the Company into the wireless business in the US growing the business to become the 2nd largest prepaid carrier in the US. He was also the
Chief Operating Officer of the Nasdaq listed Madge Networks and successfully transitioned the Company from its Token Ring Lan technology into the IP Networking environment positioning the company for its future growth. He has prior Board experience most recently with BCS Global which is in the IP collaboration marketplace.</p>
          <p>Mike brings a wealth of international experience to the Board having managed organizations in North America, Europe and Asia. In addition he has both studied and presented at the Wharton School of Business at the University of Pennsylvania and the International Management Group in Geneva, Switzerland.</p>
          </>
        )
      default:
      return (
        <>
        <p>Since 1997, Scott has been an active player in the Canadian Oil Industry.  He was one of the four original
co-founders of Vortex Energy Corp, Southern Exploration Inc., and Aurora Resources Ltd, which is headquartered in Saskatchewan.  Scott has over 35 years of executive management experience in his career, which has been primarily spent in the agricultural and oil industries.  Scott has been the C.F.O of all three companies since incorporation, and was actively involved in the divestiture of Vortex Energy Corp, Southern Exploration and Aurora Resources to other publically traded companies in 2006 and 2014 respectively.  Southern is currently developing its lands for a third divestiture of its producing oil assets. </p>
        </>
      )
    }
  }

  render() {
    console.log(this.renderImage())
    return (
      <Wrapper>
        <h1>{this.renderTitle()}</h1>
        <img src={this.renderImage()} alt={this.props.match.params.slug} />
        {this.renderContent()}
      </Wrapper>
    );
  }

}

export default withRouter(TeamMember);
