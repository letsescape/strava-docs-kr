import React from "react";
import {Link} from "react-router-dom";

export interface ButtonType {
    isLink: boolean;
    href?: string;
    isRoute?: boolean;
    theme?: string;
    style?: string;
    text: string;
}

export default function Button({isLink, href, isRoute, theme, style, text}: ButtonType) {
    return (
        <>
            {!isLink && (
                <button>버튼</button>
            )}

            {isLink && !isRoute && (
                <a
                    href={href}
                    className={
                        `btn 
                        ${theme && `btn-${theme}`} 
                        ${style && `btn-${style}`}`
                    }
                >
                    {text}
                </a>
            )}

            { isLink && isRoute && (
                <Link
                    to={href || ''}
                    className={
                        `btn 
                        ${theme && `btn-${theme}`} 
                        ${style && `btn-${style}`}`
                    }
                >
                    {text}
                </Link>
            )}
        </>
    );
}
