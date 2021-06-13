import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { NoteContextProvider } from './store/note-context';

ReactDOM.render(
    <NoteContextProvider>
        <App />
    </NoteContextProvider >, 
    document.getElementById('root'));
