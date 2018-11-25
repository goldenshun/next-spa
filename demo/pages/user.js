import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

const User = (props) => {
  const { router: { query } } = props;

  return (
    <h1>{`User ${query.id}`}</h1>
  );
};

User.propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(User);
