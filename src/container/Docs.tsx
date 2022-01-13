import DocsAside from "../component/DocsAside";
import DocsContent from "../component/DocsContent";
import './docs.css';

export default function Docs() {
    return (
        <main className="reference" role="main">
            <DocsAside/>
            <DocsContent/>
        </main>
    )
}