import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Video from "./pages/Video"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  )
}
export default App