import React from 'react';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';
import messages from './messages';
import styled from 'styled-components';
import A from './A';
import Img from './Img';
import Banner from './banner.png';
import HeaderLink from './HeaderLink';
import LocaleToggle from 'containers/LocaleToggle';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router';
import StyledAppBar from './StyledAppBar';
import {requestLogout} from '../../containers/App/actions';
import {connect} from 'react-redux';

const StyledFontawesome = styled(FontAwesome)`
  color: #fff5f5;
  float: right;
  margin: 0.6em;
  font-size: x-large !important;
  @media (max-width: 820px) {
    display: none !important;
  }  
`;

const MenuFontAwesome = styled(FontAwesome)`
  font-size: 20px !important;
  padding-left: 10px;
  width: 50px;
`;

const StyledMenuItem = styled(MenuItem)`
  color: #ededed !important;
  font-family: 'Helvetica' !important;
  // font-weight: 700 !important;
`;

const DisplayNoneSpan = styled.span`
  @media (max-width: 820px) {
      display: none !important;
    } 
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isLogged: false,
    };
  }
  
  toggle() {
    this.setState({open: !this.state.open});
  }
  
  leftNavBtn = () => {
    return (!window.matchMedia('(min-width: 820px)').matches);
  };
  
  render() {
    return (
      <div>
        <StyledAppBar
          showMenuIconButton={this.leftNavBtn()}
          onLeftIconButtonTouchTap={this.toggle.bind(this)}
          titleStyle={{display: 'none'}}
          style={{backgroundColor: this.props.backgroundColor, background: this.props.background}}
        >
          <A to="/">
            <Img src={Banner} alt="logo"/>
          </A>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.about} />
          </HeaderLink>
          <HeaderLink to="/contact">
            <FormattedMessage {...messages.contact} />
          </HeaderLink>
          <HeaderLink to="/technology">
            <FormattedMessage {...messages.technology} />
          </HeaderLink>
          <a href="https://angel.co/coinstruct" target="_blank">
            <StyledFontawesome
              name="angellist"
            />
          </a>
          <a href="https://github.com/coinstruct/coinstruct" target="_blank">
            <StyledFontawesome
              name="github"
            />
          </a>
          <DisplayNoneSpan>
            <LocaleToggle/>
          </DisplayNoneSpan>
        </StyledAppBar>
        {/* Mobile Menu*/}
        <Drawer
          docked={false}
          open={this.state.open}
          onToggleDrawer={this.toggle}
          onRequestChange={open => this.setState({open})}
          containerStyle={{backgroundColor: '#312d3b'}}
        >
          <A to="/" style={{lineHeight: "100px", marginLeft: '60px'}}>
            <Img src={Banner} alt="logo"/>
          </A>
          <br />
          <hr style={{width: '80%'}}/>
          <StyledMenuItem containerElement={<Link to="/"/>}>
            <MenuFontAwesome
              name="home"
            />
            <FormattedMessage {...messages.home} />
          </StyledMenuItem>
          <StyledMenuItem containerElement={<Link to="/about"/>}>
            <MenuFontAwesome
              name="file-text-o"
            />
            <FormattedMessage {...messages.about} />
          </StyledMenuItem>
          <StyledMenuItem containerElement={<Link to="/contact"/>}>
            <MenuFontAwesome
              name="envelope"
            />
            <FormattedMessage {...messages.contact} />
          </StyledMenuItem>
          <StyledMenuItem containerElement={<Link to="/technology"/>}>
            <MenuFontAwesome
              name="laptop"
            />
            <FormattedMessage {...messages.technology} />
          </StyledMenuItem>
          <StyledMenuItem>
            <MenuFontAwesome
              name="globe"
            />
            <LocaleToggle float="none" padding="0" margin="0"/>
          </StyledMenuItem>
        </Drawer>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestLogout: () => dispatch(requestLogout())
  };
}
export default injectIntl(connect(null, mapDispatchToProps)(Header));

