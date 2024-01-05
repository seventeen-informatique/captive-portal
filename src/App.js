import logo from './assets/medias/logo/logo.svg';
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
                <Button type="btn btn-primary" content="Voir nos offres" />
            </div>
        </header>
    );
}

const Button = ({type, content}) => {
    return (
        <button className={type}>{content}</button>
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
