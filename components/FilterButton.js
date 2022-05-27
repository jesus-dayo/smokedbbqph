const FilterButton = ({ onClick, children }) => {
  return (
    <div className="bg-slate-900 p-2 text-center text-sm font-sans text-white">
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default FilterButton;
