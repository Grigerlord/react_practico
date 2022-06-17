import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client'
import App from './routes/App'


const app = createRoot(document.getElementById('app'))

app.render(
    <App />
)

// ReactDOM.render(
//     <App />, document.getElementById('app')
// )