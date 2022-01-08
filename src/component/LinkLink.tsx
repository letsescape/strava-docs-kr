import React from "react";
import {Link} from "react-router-dom";

export interface LinkType {
    href: string;
    text: string;
    isRoute: boolean;
}

export default function ListLink(link: LinkType) {
    const {href, text, isRoute} = link;
    return (
        <li>
            {isRoute && <Link to={href}>{text}</Link>}
            {!isRoute && <a href={href}>{text}</a>}
        </li>
    );
}

