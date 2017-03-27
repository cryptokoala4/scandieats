import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';


const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Coinstruct"
        defaultTitle="Coinstruct"
        meta={[
          { name: 'description', content: 'A Blockchain based crowdfunding platform' },
        ]}
      />
      {React.Children.toArray(props.children)}
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
