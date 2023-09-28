import PropTypes from 'prop-types';
import MonacoEditor from 'react-monaco-editor';
import styles from './CodeEditor.module.css';

const CodeEditor = ({ title, code = '', onCodeChange }) => {
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
    <>
      <div className="bg-primary py-1 px-2">
        <h2 className="text-white">{title}</h2>
      </div>
      <MonacoEditor
        value={code}
        onChange={onCodeChange}
        // height="full"
        options={options}
        // theme="hc-black"
        className={styles.codeEditor}
      />
    </>
  );
};

CodeEditor.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string,
  onCodeChange: PropTypes.func
};

export default CodeEditor;
