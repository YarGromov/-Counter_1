import React from 'react';
import './App.css';
import {ScreenWithSettings} from "./components/ScreenWithSettings";
import {ScreenWithResults} from "./components/ScreenWithResults";


function App() {

    return (
        <div className="App">
            <ScreenWithSettings/>
            <ScreenWithResults/>
        </div>
    );
}

export default App;
