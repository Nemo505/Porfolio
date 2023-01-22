import { useState } from "react"
import Navbar from "./scenes/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const aboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 ) {
       setIsTopPage(true); 
      }else{
        setIsTopPage(false);
      }
      window.addEventListener("scroll",)
    }
  })

  return (
    <div className="app bg-purple">
      <Navbar
        isTopPage = {isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
