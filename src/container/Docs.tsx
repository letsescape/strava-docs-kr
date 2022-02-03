import {useEffect, useState} from "react";
import axios from "axios";
import DocsAside from "../component/DocsAside";
import DocsContent from "../component/DocsContent";
import introDocs from "../markdowns/docs/intro.md";
import activitiesCreate from "../markdowns/docs/activity/activitiesCreate.md";

import './docs.css';

export default function Docs() {
    const [contents, setContents] = useState<string[]>([]);
    useEffect(() => {
        axios(introDocs)
            .then(res => res.data)
            .then(data => setContents([data]));
    }, []);
    return (
        <main className="reference" role="main">
            <DocsAside/>
            <DocsContent contents={contents}/>
        </main>
    )
}