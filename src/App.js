import "./App.css";
import Search from "./Search";
import Results from "./Results";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Dictionary <i class="fas fa-book-open"></i>
        </h1>
        <h3>/ˈdɪkʃ(ə)n(ə)ri/</h3>
        <p>
          a book or electronic resource that lists the words of a language
          (typically in alphabetical order) and gives their meaning, or gives
          the equivalent words in a different language, often also providing
          information about pronunciation, origin, and usage.
        </p>
        <Search />
        <Results />
      </div>
    </div>
  );
}

export default App;
