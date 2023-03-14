
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './compo/Header/Header';
import Blog from './compo/Header/header_names/Blog';
import Features from './compo/Header/header_names/Features';
import Footer from './compo/Footer/Footer';
import Pricing from './compo/Header/header_names/Pricing';
import Signup from './compo/Header/header_names/Signup';
import Login from './compo/Header/header_names/Login';
import Cou from './compo/Header/header_names/Cou';
import BodyOne from './compo/Body/BodyOne';
import EmptyTag from './compo/Header/EmptyTag';




function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header />
   
    <EmptyTag/>
      <Routes>
        <Route path='/' element={<BodyOne/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/support' element={<Cou/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
        
      </Routes>
    {/* <BodyOne/> */}
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
