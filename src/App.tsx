import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Intro from "./container/Intro";
import Guide from "./container/Guide";
import Header from "./component/Header";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>

                <Routes>
                    <Route path="/" element={<Intro/>}/>
                    <Route path="/docs/getting-started" element={<Guide/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
