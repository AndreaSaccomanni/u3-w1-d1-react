import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/buttonComponents";
import ImageComponent from "./components/imageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent label="New button" className="newButton" />
      </header>
      <main className="main">
        <ImageComponent
          src="https://images.unsplash.com/photo-1709884735646-897b57461d61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt="unsplash image"
          className="unsplashImage"
        />
      </main>
    </div>
  );
}

export default App;
