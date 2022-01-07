import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Intro from "./container/Intro";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Intro />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
