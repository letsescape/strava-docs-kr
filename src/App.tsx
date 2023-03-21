import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./component/Header";
import Intro from "./container/Intro";
import Guide from "./container/Guide";
import Docs from "./container/Docs";
import PageNotFound from "./container/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/docs/getting-started" element={<Guide/>}/>
          <Route path="/docs/reference" element={<Docs/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
