import PropTypes from 'prop-types';

const CodeEditor = ({ code = '', onCodeChange, readOnly = false }) => {
  const orderColumnValue = code
    .split('\n')
    .map((_, index) => `${index + 1}`)
    .join('\n');

  return (
    <>
      <textarea
        readOnly
        value={orderColumnValue}
        rows={orderColumnValue.split('\n').length + 1}
        className="basis-[5%] min-w-[48px] min-h-full overflow-hidden resize-none w-full pl-2.5 py-4 bg-gray-400 outline-none text-center"
      ></textarea>
      <textarea
        readOnly={readOnly}
        value={code}
        onChange={onCodeChange}
        rows={code.split('\n').length + 1}
        className="flex-grow min-h-full overflow-auto resize-none w-full pl-2.5 py-4 outline-none bg-gray-300 font-mono"
      ></textarea>
    </>
  );
};

CodeEditor.propTypes = {
  code: PropTypes.string,
  onCodeChange: PropTypes.func,
  readOnly: PropTypes.bool
};

export default CodeEditor;
