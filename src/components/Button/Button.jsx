import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ children, onClick, contained }) => {
  return (
    <button
      onClick={onClick}
      className={clsx('w-full p-4 border border-primary rounded-sm transition-all duration-300', {
        'hover:text-white hover:bg-primary': !contained,
        'bg-primary text-white hover:bg-primary/80': contained
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  contained: PropTypes.bool
};
export default Button;
