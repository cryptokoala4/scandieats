import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import messages from './messages';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import Paper from 'material-ui/Paper';
import FontAwesome from 'react-fontawesome';
import Img from 'components/Img';

const Wrapper = styled(PageContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`;

export default class AboutPage extends React.Component {
  render() {
    return (
      <article>
        <Header background="linear-gradient(to bottom, #312d3b, rgba(48, 44, 59, 0)" backgroundColor="rgba(48, 44, 59, 1)"/>
      </article>
    );
  }
}
