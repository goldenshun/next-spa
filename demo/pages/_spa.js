import React from 'react';
import { Router } from '../routes';

class NextSpa extends React.Component {
  componentDidMount() {
    Router.replaceRoute(window.location.pathname); // eslint-disable-line no-undef
  }

  render() {
    return null;
  }
}

export default NextSpa;
