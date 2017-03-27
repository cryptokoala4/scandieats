import React, {Component, PropTypes} from 'react';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import messages from './messages';
import Header from 'components/Header';
import Img from 'components/Img';
import '!style-loader!css-loader!sass-loader!./style.css';
import Paper from 'material-ui/Paper';
import DownArrow from 'assets/images/home/down_arrow.png';
import DownArrowWhite from 'assets/images/home/down_arrow_white.png';
import Scroll from 'react-scroll';
import FontAwesome from 'react-fontawesome';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Waypoint from 'react-waypoint';
import {Doughnut} from 'react-chartjs-2';

export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const {formatMessage} = this.props.intl;
    return (
      <article>
        <Header background="#312d3b" />
        <div>Hello World</div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
};

export default injectIntl(HomePage);
