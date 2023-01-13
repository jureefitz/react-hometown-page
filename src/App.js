import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <footer>
      This page was coded by Juree Fitzgerald and is {" "}
      <a href="/" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
     </footer>
    </div>
  );
}

export default App;
