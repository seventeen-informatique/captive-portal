import logo from './assets/medias/logo/logo.svg';
import {ReactComponent as IconGoogle} from './assets/medias/icones/brands/google.svg';
import {ReactComponent as IconCode} from './assets/medias/icones/programing/code.svg';
import './assets/css/main.css';
import React from "react";

const Nav = () => {
    return (
      <nav>
          <div>
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  <img src={logo} className="App-logo" alt="logo"/>
              </a>
          </div>
      </nav>
    );
}

const Header = ({title, text}) => {
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

const Button = ({type, icon, content, link}) => {
    return (
        <a href={link} className={type} target="_blank" rel="noreferrer">{icon} {content}</a>
    );
}

function App() {
    return (
        <div>
            <Nav />
            <Header title="Bienvenue chez SEVENTEEN INFORMATIQUE !" text="Connectez-vous pour accéder à nos services exclusifs et découvrir un univers de solutions numériques sur mesure." />
        </div>
    );
}

export default App;
