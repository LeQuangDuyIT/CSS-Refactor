import { useContext } from 'react';
import ControlSpace from './ControlSpace/ControlSpace';
import CodeEditor from '~/components/CodeEditor';
import { MainContext } from '~/context/MainProvider';
import Header from './Header';

const WorkSpace = () => {
  const { inputCode, updateInput, codeString } = useContext(MainContext);

  return (
    <div className="flex flex-col h-screen w-full max-h-screen text-primary text-base overflow-hidden">
      <Header />
      <div className="flex gap-2 p-8 h-full bg-gray-200 overflow-hidden">
        {/* InputSpace */}
        <div className="flex flex-col basis-5/12 overflow-hidden">
          <CodeEditor title="Input" code={inputCode} onCodeChange={value => updateInput(value)} />
        </div>
        {/* ControlSpace */}
        <div className="basis-2/12">
          <ControlSpace />
        </div>
        {/* OutputSpace */}
        <div className="flex flex-col basis-5/12 overflow-hidden">
          <CodeEditor title="Output" code={codeString} />
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
