import './App.scss';
import { About, Footer, Header, Skills, Work } from './containers'
import { Navbar } from './components';


function App() {
  return (
    <div className="app">
      <Navbar></Navbar> 
      <Header></Header>
      <About></About>
      <Work></Work>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
