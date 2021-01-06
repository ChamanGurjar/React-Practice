import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { useState } from 'react';

const CodeMirrorView = () => {
    const options = {
        mode: 'text/x-sql',
        // theme: 'material',
        lineNumbers: true
    }
    const [state, setState] = useState('')
    return (

        <CodeMirror
            value={state}
            options={options}
            onBeforeChange={(editor, data, value) => {
                setState(value);
            }}
            onChange={(editor, data, value) => {
                setState(value);
            }}
        />
    )
}

export default CodeMirrorView;
