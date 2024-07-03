import './tailwind.css';
import Navbar from './components/navbar'
import Social from './components/Social'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/portfolio'
import Experience from './components/Experience'
import Contact from './components/contact'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Social/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
