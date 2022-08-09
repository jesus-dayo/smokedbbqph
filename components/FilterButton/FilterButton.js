const FilterButton = ({ onClick, active = false, children }) => {
  return (
    <div
      className={` p-2 cursor-pointer hover:shadow-md rounded-sm flex justify-center text-sm md:text-1xl font-sans text-white hover:text-slate-400 w-full md:w-56
      ${active ? 'bg-zinc-500' : 'bg-slate-900'}`}
    >
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

FilterButton.displayName = 'FilterButton';

export default FilterButton;
