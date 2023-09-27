import { useState } from 'react';
import PageLayout from '~/layouts/PageLayouts';
import InputSpace from './layouts/InputSpace';
import OutputSpace from './layouts/OutputSpace';

const WorkSpace = () => {
  const [outputCode, setOutputCode] = useState([]);

  return (
    <PageLayout>
      <div className="flex h-full">
        <InputSpace handleRefactoring={output => setOutputCode(output)} />
        <OutputSpace outputCode={outputCode} />
      </div>
    </PageLayout>
  );
};

export default WorkSpace;
