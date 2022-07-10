import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './stylesheets/home.css'
import './stylesheets/header-footer.css'
import './stylesheets/courosel.css'
import './stylesheets/projects.css'
import './App.css';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:500
});

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/projects' element={<Projects/>}/>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>

    <Footer/>
    </div>
  );
}

export default App;
