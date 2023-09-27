import { useContext } from 'react';
import { MainContext } from '~/context/MainProvider';

const ControlSpace = () => {
  const { handleRefactoring, updateInput, handleCopyOutputCode } = useContext(MainContext);
  return (
    <div className="flex flex-col justify-between h-full px-6">
      <div className="flex flex-col gap-2">
        <button onClick={handleRefactoring} className="w-full p-4 border border-black rounded-sm">
          REFACTOR
        </button>
        <button
          onClick={handleCopyOutputCode}
          className="w-full p-4 border border-black rounded-sm"
        >
          COPY
        </button>
      </div>
      <button onClick={() => updateInput('')} className="w-full p-4 border border-black rounded-sm">
        RESET
      </button>
    </div>
  );
};

export default ControlSpace;
