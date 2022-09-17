import PropTypes from 'prop-types';
import { useState } from 'react';
import FilterButton from '../FilterButton/FilterButton';

const FilterGroup = ({ filters = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      {filters?.map((filter, index) => (
        <FilterButton
          key={`filter-${index}`}
          onClick={() => {
            setActiveIndex(index);
            filter.click();
          }}
          active={activeIndex === index}
          {...filter.props}
        >
          {filter.label}
        </FilterButton>
      ))}
    </>
  );
};

FilterGroup.propTypes = {
  filters: PropTypes.array,
};

export default FilterGroup;
