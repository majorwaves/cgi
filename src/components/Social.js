import React from 'react'
import styled from 'styled-components'
import {FaFacebookF, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'

const Wrapper = styled.div`
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 0;
`;

const Item = styled.li`
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-right: 4px;
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: translate(0, -2px);
  }

  &:last-of-type {
    margin: 0;
  }

  &.twitter { background: rgb(0,172,237) }
  &.linkedin { background: rgb(0,123,182) }
  &.facebook { background: rgb(59,89,152) }
  &.instagram { background: rgb(193,53,132) }
`;

const Social = (props) => (
  <Wrapper>
    <List>
      <Item className='twitter'><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/cgi_mg'><FaTwitter color='white' /></a></Item>
      <Item className='linkedin'><a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/company/cgi-merchant-group'><FaLinkedin color='white' /></a></Item>
      <Item className='facebook'><a target='_blank' rel='noopener noreferrer' href='https://facebook.com/CGIMerchantGroup'><FaFacebookF color='white' /></a></Item>
      <Item className='instagram'><a target='_blank' rel='noopener noreferrer' href='https://instagram.com/cgi_mg'><FaInstagram color='white' /></a></Item>
    </List>
  </Wrapper>
);

export default Social;
