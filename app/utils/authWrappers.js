import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { makeSelectCurrentUser } from '../containers/App/selectors';
import { selectCurrentUser } from '../containers/App/selectors';
import { fromJS } from 'immutable';

// Take the regular authentication & redirect to login from before
export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => localStorage,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  failureRedirectPath: '/signin',
  // authenticatingSelector: (state) => { return ( state.user && state.user.isLoading === true ? true : false ); },
  predicate: localStorage => localStorage.token
});