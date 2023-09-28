import { useContext } from 'react';
import Button from '~/components/Button';
import { MainContext } from '~/context/MainProvider';
import demoCssCode from '~/utils/demo';

const ControlSpace = () => {
  const { handleRefactoring, updateInput, handleCopyOutputCode } = useContext(MainContext);
  return (
    <div className="flex flex-col justify-between h-full px-6">
      <div className="flex flex-col gap-2">
        <Button contained onClick={handleRefactoring}>REFACTOR</Button>
        <Button onClick={handleCopyOutputCode}>COPY RESULT</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button onClick={() => updateInput(demoCssCode)}>RESET</Button>
        <Button onClick={() => updateInput('')}>CLEAR</Button>
      </div>
    </div>
  );
};

export default ControlSpace;
