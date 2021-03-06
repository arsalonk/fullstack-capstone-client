import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './auth/login-form';
import InfoModal from './info-modal';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <LoginForm />
      <InfoModal />
      <p>Dont have an account?</p>
      <Link to="/register">Sign Up!</Link>
    </div>
  );

}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  modal: state.tank.modal
});

export default connect(mapStateToProps)(LandingPage);