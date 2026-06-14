
import { Services } from './services/Services';
import { Descargas } from './descargas/Descargas';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <main>
        <Services />
        <Descargas />
      </main>
    </div>
  );
}

export default App;