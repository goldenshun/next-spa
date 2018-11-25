import React from 'react';
import { Router } from '../routes';

class NextSpa extends React.Component {
  componentDidMount() {
    console.log('window.location', window.location);
    Router.replaceRoute('/user/124');
  }

  render() {
    return null;
  }
}

export default NextSpa;
