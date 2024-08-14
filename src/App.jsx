import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SingUp from "./pages/SingUp"
import About from "./pages/About"
import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
