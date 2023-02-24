import { useState, useEffect } from "react"
import Navbar from "./scenes/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";

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
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);  
    }
  }, []);

  return (
    <div className="app bg-purple">
      <Navbar
        isTopPage = {isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {aboveMediumScreens && (
          <DotGroup 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage}/>
      </div>
    </div>
  )
}

export default App
