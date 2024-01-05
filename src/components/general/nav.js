import React from "react";
import {ReactComponent as Logo} from "../../assets/medias/logo/logo.svg";
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <div>
                <Link to="/">
                    <Logo />
                </Link>
            </div>
        </nav>
    );
}