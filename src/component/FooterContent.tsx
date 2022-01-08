import React from "react";
import ListLink, {LinkType} from "./LinkLink";

export interface ContentType {
    title: string;
    description: string;
    links: LinkType[]
}

export default function FooterContent({title, description, links}: ContentType) {
    return (
        <div className="col-md-4">
            <h2>{title}</h2>
            <p>{description}</p>

            <ul className="list-links">
                {links.map((link: LinkType, i) => (
                    <ListLink
                        key={i}
                        {...link}
                    />
                ))}
            </ul>
        </div>
    );
}
