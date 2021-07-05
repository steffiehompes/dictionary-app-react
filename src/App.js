import "./App.css";
import Search from "./Search";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Dictionary
          <LocalLibraryIcon className="LibraryIcon"></LocalLibraryIcon>
        </h1>

        <Search defaultKeyword="code" />
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
