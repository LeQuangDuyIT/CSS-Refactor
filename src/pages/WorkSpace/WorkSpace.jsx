import { useContext } from 'react';
import ControlSpace from './ControlSpace/ControlSpace';
import CodeEditor from '~/components/CodeEditor';
import { MainContext } from '~/context/MainProvider';

const WorkSpace = () => {
  const { inputCode, updateInput, codeString } = useContext(MainContext);

  return (
    <div className="flex flex-col h-screen w-full max-h-screen text-base overflow-hidden">
      <div className="w-full bg-black">
        <h1 className="p-8 text-white text-4xl font-bold">CSS Refactor</h1>
      </div>
      <div className="flex gap-2 p-8 h-full overflow-hidden">
        {/* InputSpace */}
        <div className="flex basis-5/12 min-h-full max-h-full overflow-auto">
          <CodeEditor code={inputCode} onCodeChange={e => updateInput(e.target.value)} />
        </div>
        {/* ControlSpace */}
        <div className="basis-2/12">
          <ControlSpace />
        </div>
        {/* OutputSpace */}
        <div className="flex basis-5/12 min-h-full max-h-full overflow-auto">
          <CodeEditor code={codeString} readOnly/>
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
