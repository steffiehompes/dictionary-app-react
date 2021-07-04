import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Dictionary <i className="fas fa-book-open"></i>
        </h1>
        <h3>/ˈdɪkʃ(ə)n(ə)ri/</h3>

        <Search />
      </div>
    </div>
  );
}

export default App;
