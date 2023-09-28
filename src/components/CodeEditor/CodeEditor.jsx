import PropTypes from 'prop-types';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = ({ code = '', onCodeChange }) => {
  const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 14,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
      enabled: true
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true
  };

  return (
    <MonacoEditor
      value={code}
      onChange={onCodeChange}
      height="full"
      options={options}
      // theme="hc-black"
    />
  );
};

CodeEditor.propTypes = {
  code: PropTypes.string,
  onCodeChange: PropTypes.func
};

export default CodeEditor;
