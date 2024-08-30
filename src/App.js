import './App.css';
import Footer from './component/Footer';
import Home from './component/Home';
import Item from './component/Item';
import Navbar from './component/Navbar';
import Form from './component/Form';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const txt = (event) => {
    event.preventDefault();
    let input = document.querySelector("#input");
    var fmt_txt = input.value.toLowerCase();
    if (fmt_txt !== "") {
      console.log(fmt_txt);
      input.value = "";
    }
  }
  return (
    <Router>
      <div className='app'>
        <Navbar function={txt} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/category/jewelery' element={<Item category='/category/jewelery' key='jewelery' />} />
          <Route exact path='/category/electronics' element={<Item category='/category/electronics' key='electronics' />} />
          <Route exact path="/category/men's clothing" element={<Item category="/category/men's clothing" key="men's" />} />
          <Route exact path="/category/women's clothing" element={<Item category="/category/women's clothing" key="women's" />} />
          <Route exact path="/all" element={<Item category="" key="" />} />
          <Route exact path="/form" element={<Form/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
