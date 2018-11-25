import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

function enhance(WrappedComponent) {
  class WithNextSpa extends React.Component {
    state = {
      isClient: false,
    }

    componentDidMount() {
      this.setState({ isClient: true });
    }

    render() {
      const { isClient } = this.state;
      return isClient && <WrappedComponent {...this.props} />;
    }
  }

  hoistNonReactStatics(WithNextSpa, WrappedComponent);
  WithNextSpa.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return WithNextSpa;
}

export default enhance;
