import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery"
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import nav_profile from '../assets/maki.png'


const Link = ({ page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();

    return (
        <AnchorLink 
        className={`${selectedPage === lowerCasePage ? "text-yellow-300" : "text-white"}
        hover:text-yellow-300 transition duration-500
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({isTopPage, selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const aboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopPage ? "" : "bg-red-400";

  return (
    <nav className={` ${navbarBackground} z-40 w-full fixed top-0 py-6`}>
        <div className={"flex items-center justify-between mx-auto w-5/6"}>
            <h4 className="font-playfair text-3xl font-bold hover:text-fuchsia-300 transition duration-300 TiltPrism">MAPLE <span><EmojiNatureIcon /></span></h4>
            {aboveSmallScreens ? (
                <div className="flex justify-between gap-16 font-mono">
                    <Link page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link page="Skills"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link page="Projects"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            ) : (
                <button className="rounded-full bg-fuchsia-900"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <MenuOpenIcon />
                </button>
            )}
            {!aboveSmallScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full w-[300px] TiltPrism" style={{background: "linear-gradient(to right, #151515, #480755, #766DC1)"}}>
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}> 
                            <img src={nav_profile} alt="menu-icon" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-10 ml-[22%] text-2xl text-red-400">
                        <Link page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                       
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
