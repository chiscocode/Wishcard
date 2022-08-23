import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'


import Create from './components/Create'




import Page from './components/Page'





function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path="/create-wish" element={<Create/>}/>



      <Route exact path="*" element={<Page/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>


      
  );
}

export default App;
