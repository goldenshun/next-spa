import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

const enhance = Router => (WrappedComponent) => {
  class WithNextSpa extends React.Component {
    state = { isClient: false };

    componentDidMount() {
      const { pathname, search } = window.location;
      if (pathname !== '/') {
        Router.replaceRoute(pathname + search);
      } else {
        this.setState({ isClient: true });
      }
    }

    render() {
      const { isClient } = this.state;
      return isClient ? <WrappedComponent {...this.props} /> : null;
    }
  }

  hoistNonReactStatics(WithNextSpa, WrappedComponent);
  WithNextSpa.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return WithNextSpa;
};

export default enhance;
