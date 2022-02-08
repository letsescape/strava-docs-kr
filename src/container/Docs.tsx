import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import DocsAside from "../component/docs/DocsAside";
import DocsContent from "../component/docs/DocsContent";
import docs from "../markdowns/docs";
import './docs.css';

export default function Docs() {
  const [contents, setContents] = useState<string[]>([]);

  useEffect(() => {
    const request = Array.from({length: docs.length}, (_, i) => axios(docs[i]));
    axios.all(request)
      .then((res: AxiosResponse<string>[]) => {
        const contents = res.map(item => item.data);
        setContents(contents);
      });
  }, []);

  return (
    <main className="reference" role="main">
      <DocsAside/>
      <DocsContent contents={contents}/>
    </main>
  )
}