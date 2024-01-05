import React from "react";

export default function Button({link, type, content, icon}) {
    return (
        <a href={link} className={type} target="_blank" rel="noreferrer">{icon} {content}</a>
    );
}