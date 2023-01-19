import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Apps from "./pages/Apps";
import Home from "./pages/Home";


function App() {
  return (
    <div className="bg-main-bg w-full ">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/apps" element={<Apps/>}/>
        <Route path="/about-us" element={<About/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
