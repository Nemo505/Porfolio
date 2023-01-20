import { useState } from "react"
import Navbar from "./scenes/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const aboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="app bg-purple">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
