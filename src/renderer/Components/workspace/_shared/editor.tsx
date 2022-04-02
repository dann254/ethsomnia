import { UnControlled as ControlledEditor } from 'react-codemirror2';
import { useDarkMode } from '../../../Hooks/useDarkMode';
import { useEffect, useMemo } from 'react';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';

import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/foldgutter.css';

import './darkTheme.css';
import './lightTheme.css';

interface IEditorProps {
  isReadOnly?: boolean;
}

const Editor: React.FC<IEditorProps> = (props) => {
  const { isReadOnly = false } = props;
  const [darkMode] = useDarkMode();

  // const obj = JSON.parse(code);
  //       const str = JSON.stringify(obj, null, replacer);

  const code = JSON.stringify(
    {
      string: 'this is a test ...',
      integer: 42,
      array: [1, 3, NaN],
      arrObj: [{ mango: true, 1: 2 }],
      float: 3.14159,
      undefined: undefined,
      nan: NaN,
      object: {
        'first-child': true,
        'second-child': false,
        'last-child': null,
      },
      string_number: '1234',
      date: new Date(),
    },
    null,
    2
  );

  useEffect(() => {}, [darkMode]);

  const editorTheme = useMemo(
    () => (darkMode ? 'darkEditor' : 'lightEditor'),
    [darkMode]
  );
  return (
    <div className="h-[calc(100%-4rem)]">
      <ControlledEditor
        className={`codeMirrorEditor h-full ${editorTheme}`}
        value={code}
        options={{
          lineWrapping: true,
          lint: true,
          foldGutter: true,
          mode: 'javascript',
          lineNumbers: true,
          tabSize: 2,
          indentWithTabs: false,
          readOnly: isReadOnly,
          tabindex: 1,
          styleSelectedText: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
          highlightSelectionMatches: {
            showToken: /\w/,
            annotateScrollbar: true,
          },
        }}
        // onBeforeChange={(value, viewUpdate) => {
        //   console.log('value:', value);
        // }}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
};

export default Editor;
