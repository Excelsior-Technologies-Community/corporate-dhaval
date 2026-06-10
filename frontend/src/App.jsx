import { Route, Routes } from "react-router-dom"
import Landing from "./Pages/Landing"
import Services from "./Pages/Services"


function App() {


  return (
    <>
   <Routes>
    <Route path="/" element={<Landing/>}></Route>
    <Route path="/service" element={<Services/>}></Route>
   
   </Routes>
      </>
  )
}

export default App
