import {useEffect, useState} from "react";
import axios from "axios";
import DocsRow from "./DocsRow";
import IntroDocs from "../markdowns/docs/intro.md";

export default function DocsContent() {
    const [introDocs, setIntroDocs] = useState('');
    useEffect(() => {
        axios(IntroDocs)
            .then(res => res.data)
            .then(data => setIntroDocs(data));
    })
    return (
        <div id="content">
            <div className="container-fluid">
                <DocsRow contents={[introDocs, '']}/>
            </div>
        </div>
    )
}