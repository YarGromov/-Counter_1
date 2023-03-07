import React from 'react';
import './App.css';
import {ScreenWithSettingsMemo} from "./components/ScreenWithSettings";
import {ScreenWithResultsMemo} from "./components/ScreenWithResults";



function App() {

    return (
        <div className="App">
            <ScreenWithSettingsMemo/>
            <ScreenWithResultsMemo/>
        </div>
    );
}

export default App;
