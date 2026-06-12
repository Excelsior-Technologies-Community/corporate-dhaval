import { Route, Routes } from "react-router-dom"
import Landing from "./Pages/Landing"
import Services from "./Pages/Services"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import About from "./Pages/About"


function App() {


  return (
    <>
   <Routes>
    <Route path="/" element={<Landing/>}></Route>
    <Route path="/nav" element={<Nav/>}></Route>
    <Route path="/footer" element={<Footer/>}></Route>
    <Route path="/service" element={<Services/>}></Route>
    <Route path="/about" element={<About/>}></Route>
   </Routes>
      </>
  )
}

export default App
