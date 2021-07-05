import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Dictionary <i className="fas fa-book-open"></i>
        </h1>

        <Search />
        <footer>
          Coded by Steffie Hompes,{" "}
          <a
            className="Github"
            href="https://github.com/steffiehompes/dictionary-app-react"
            target="_blank"
            rel="noreferrer"
            alt="github-link"
          >
            {" "}
            open source on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
