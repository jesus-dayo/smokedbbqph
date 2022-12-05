import PropTypes from 'prop-types';
const FilterButton = ({ onClick, active = false, dataCy, children }) => {
  return (
    <div
      className={` p-2 cursor-pointer hover:shadow-md rounded-sm flex justify-center text-sm md:text-1xl font-sans text-white hover:text-slate-400 w-full md:w-56
      ${active ? 'bg-zinc-500' : 'bg-slate-900'}`}
      onClick={onClick}
    >
      <button data-cy={dataCy}>{children}</button>
    </div>
  );
};

FilterButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  dataCy: PropTypes.string,
  onClick: PropTypes.func,
};

FilterButton.displayName = 'FilterButton';

export default FilterButton;
