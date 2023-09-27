import PropTypes from 'prop-types';

const PageLayout = ({ children }) => {
  return <div className="w-full h-screen text-base">{children}</div>;
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageLayout;
