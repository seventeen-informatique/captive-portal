import React from "react";

import Button from "./naviguation";
import {ReactComponent as IconGoogle} from '../../assets/medias/icones/brands/google.svg';
import {ReactComponent as IconCode} from '../../assets/medias/icones/programing/code.svg';

export default function Header({title, text}) {
    return (
        <header>
            <div>
                <h1>{title}</h1>
                <p>{text}</p>
                <div className="btn-container">
                    <Button type="btn btn-primary" content="Voir nos offres" icon={<IconCode />} link="https://seventeeninfo.fr" />
                    <Button type="btn btn-secondary" content="Naviguer sur internet" icon={<IconGoogle />} link="https://google.fr"/>
                </div>
            </div>
        </header>
    );
}