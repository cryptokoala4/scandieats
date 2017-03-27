import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #fff5f5;
  padding: 13px;
  margin-top: 4px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  float: right;
  @media (max-width: 820px) {
    display: none !important;
  }  
  
  &:active {
    // background: #312d3b;
    color: #ffc600;
  }
`;


