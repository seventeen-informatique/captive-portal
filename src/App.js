import logo from './assets/medias/logo/logo.svg';
import './assets/css/main.css';

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

function App() {
    return (
        <Nav/>
    );
}

export default App;
