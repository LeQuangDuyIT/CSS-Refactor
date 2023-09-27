import { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import propertiesType from '~/utils/propertiesType';

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState([]);

  useEffect(() => {
    if (inputCode === '') {
      setOutputCode([]);
    }
  }, [inputCode]);

  const handleRefactoring = e => {
    e.preventDefault();
    const lines = inputCode.split('\n');

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
        setOutputCode(cssCode);
      }
    }
  };

  const codeString = outputCode.reduce((string, item) => {
    const selectorBlock = `${item.selector} {`;
    const propertiesBlock = item.properties.map(prop => `    ${prop.trim()}`).join('\n');
    const closingBracket = '}';
    const mergeString = `${string}
${selectorBlock}
${propertiesBlock}
${closingBracket}`;
    return mergeString.replace(/^\n/, '');
  }, '');

  const updateInput = value => {
    setInputCode(value);
  };

  const handleCopyOutputCode = () => {
    navigator.clipboard
      .writeText(codeString)
      .then(() => {
        console.log('Đã sao chép vào clipboard');
      })
      .catch(error => {
        console.error('Lỗi khi sao chép vào clipboard:', error);
      });
  };

  return (
    <MainContext.Provider
      value={{ inputCode, updateInput, codeString, handleRefactoring, handleCopyOutputCode }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node
};

export default MainProvider;
