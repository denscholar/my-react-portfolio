import { About, Header, Work, Footer, Skills } from './container';
import Navbar from './components/Navbar/Navbar';
import './App.scss';



function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
