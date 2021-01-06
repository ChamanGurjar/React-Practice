
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/sql/sql');
require('codemirror/mode/swift/swift');

const CodeMirrorViewUncontrolled = () => {
    const options = {
        mode: 'text/x-swift',
        // theme: 'material',
        lineNumbers: true
    }

    return (

        <CodeMirror
            value='<h1>I ♥ react-codemirror2</h1>'
            options={options}
            onChange={(editor, data, value) => {
                console.log(value)
            }}
        />
    )
}

export default CodeMirrorViewUncontrolled;
