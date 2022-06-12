import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

const Quantity = ({ value = 0, onAdd, onMinus }) => {
  return (
    <div className="flex bg-black rounded-md h-10">
      <div className="w-8 text-white ">
        <PlusSmIcon onClick={onAdd} className="cursor-pointer" />
      </div>
      <div className="text-center text-black">
        <input
          type={'text'}
          value={value}
          onChange={() => {}}
          className="w-8 h-full text-center border-t-2 border-b-2 border-black"
        />
      </div>
      <div className="w-8 text-white">
        <MinusSmIcon onClick={onMinus} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Quantity;
