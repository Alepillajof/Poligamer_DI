import Header from './components/header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import { Services } from './components/services/Services';
import { Downloads } from './components/downloads/Downloads';
import { FAQ } from './components/faq/FAQ';
import Contacts from './components/contacts/Contacts';
import { Footer } from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Main />
        <About />
        <Services />
        <Downloads />
        <FAQ />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

export default App;