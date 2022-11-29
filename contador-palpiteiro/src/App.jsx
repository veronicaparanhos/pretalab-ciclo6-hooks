import "./App.css";
import Header from "./components/Header";
import Contador from "./components/Contador";

function App() {
  return (
    <div className="App">
      <Header nomeGrupo="Grupo Ada!" integrantes="Verônica Paranhos" />
      <Contador />
    </div>
  );
}

export default App;
