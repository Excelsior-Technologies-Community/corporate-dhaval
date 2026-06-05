import { Route, Routes } from "react-router-dom"
import Landing from "./Pages/Landing"


function App() {


  return (
    <>
   <Routes>
    <Route path="/" element={<Landing/>}></Route>
   </Routes>
      </>
  )
}

export default App
