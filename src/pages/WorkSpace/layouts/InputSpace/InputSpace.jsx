import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import propertiesType from '~/utils/propertiesType';

const InputSpace = ({ handleRefactoring }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const lines = inputValue.split('\n');

    const cssCode = [];
    let i = 0;
    let indexStart = -1;
    for (const line of lines) {
      i++;
      if (line.includes('{')) {
        indexStart = i;
        cssCode.push({ _id: uuidv4(), selector: line.replace('{', ''), properties: [] });
      }
      if (line.includes('}')) {
        let propertiesList = lines.slice(indexStart, i - 1);
        propertiesList = propertiesList.sort((a, b) => {
          const orderA = propertiesType.findIndex(type =>
            type.list.includes(a.split(':')[0].replace(/\s+/g, ''))
          );
          const orderB = propertiesType.findIndex(type =>
            type.list.includes(b.split(':')[0].replace(/\s+/g, ''))
          );
          return orderA - orderB;
        });

        propertiesType.forEach(type => {
          const index = propertiesList.findIndex(prop =>
            type.list.includes(prop.split(':')[0].replace(/\s+/g, ''))
          );
          if (index !== -1) {
            propertiesList.splice(index, 0, '');
          }
        });

        if (propertiesList[0] === '') {
          propertiesList.splice(0, 1);
        }

        cssCode[cssCode.length - 1].properties = propertiesList;
        handleRefactoring(cssCode);
      }
    }
  };

  const orderColumnValue = inputValue
    .split('\n')
    .map((_, index) => `${index + 1}`)
    .join('\n');

  return (
    <div className="flex basis-1/2 min-h-full overflow-auto">
      <div className="basis-[5%] min-w-[48px] min-h-full">
        <textarea
          readOnly
          value={orderColumnValue}
          rows={inputValue.split('\n').length + 1}
          className="w-full min-h-full pl-2.5 outline-none text-center overflow-hidden"
        ></textarea>
      </div>
      <form className="flex-grow min-h-full" onSubmit={e => handleSubmit(e)}>
        <textarea
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          rows={inputValue.split('\n').length + 1}
          className="w-full min-h-full pl-2.5 overflow-hidden bg-gray-300 font-mono"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputSpace;
