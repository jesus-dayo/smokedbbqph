const FilterButton = ({ onClick, children }) => {
  return (
    <div className="bg-slate-900 p-2 flex justify-center text-sm md:text-1xl font-sans text-white">
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default FilterButton;
