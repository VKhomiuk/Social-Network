import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'hi, how are you?', likesCounter: "1"},
    {id: 2, message: 'it\'s my first post', likesCounter: "20"},
]

let dialogs = [
    {id: 1, Name: 'Vadim'},
    {id: 2, Name: 'Vlad'},
    {id: 3, Name: 'Dasha'},
    {id: 4, Name: 'Misha'},
]

let messages = [
    {id: 1, message: 'I`m fine thanks'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How are you'},
]

ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();