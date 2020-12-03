import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>

        <form onSubmit={() => {}}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Digite o nome da cidade"
          />
          <button type="submit">Pesquisar</button>
        </form>
      </header>

      <main>
        <div className="container">
          <h1>Piancó</h1>

          <span>36°</span>
          <p>Céu limpo</p>
          <hr/>
          <p>Velocidade do vento: 5 km/h</p>
          <p>Humidade: 32%</p>

        </div>
      </main>
    </div>
  );
}

export default App;
