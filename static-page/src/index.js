import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './components/Header'
import {Content} from './components/Content'
import {Footer} from './components/Footer'

function App() {
    return (
        <div className="page">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))