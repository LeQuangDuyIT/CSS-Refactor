import PropTypes from 'prop-types';

const OutputSpace = ({ outputCode }) => {
  const codeString = outputCode.reduce((string, item) => {
    const selectorBlock = `${item.selector} {`;
    const propertiesBlock = item.properties.map(prop => `    ${prop.trim()}`).join('\n');
    const closingBracket = '}';

    return `${string}
${selectorBlock}
${propertiesBlock}
${closingBracket}`;
  }, '');

  console.log(codeString);

  return (
    <div className="basis-1/2 min-h-full overflow-auto">
      <textarea
        readOnly
        value={codeString}
        rows={codeString.split('\n').length + 1}
        className="w-full min-h-full pl-2.5 overflow-hidden bg-gray-300 font-mono"
      ></textarea>
    </div>
  );
};

OutputSpace.propTypes = {
  outputCode: PropTypes.array
};

export default OutputSpace;
