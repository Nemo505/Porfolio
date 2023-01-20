import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery"

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

const Navbar = ({selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const aboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <nav className={"z-40 w-full fixed top-0 py-6"}>
        <div className={"flex items-center justify-between mx-auto w-5/6"}>
            <h4 className="font-playfair text-3xl font-bold">JE</h4>
            {aboveSmallScreens ? (
                <div className="flex justify-between gap-16 font-mono">
                    <Link page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={selectedPage}
                    />
                    <Link page="Skills"
                        selectedPage={selectedPage}
                        setSelectedPage={selectedPage}
                    />
                    <Link page="Projects"
                        selectedPage={selectedPage}
                        setSelectedPage={selectedPage}
                    />
                    <Link page="Testimonials"
                        selectedPage={selectedPage}
                        setSelectedPage={selectedPage}
                    />
                    <Link page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={selectedPage}
                    />
                </div>
            ) : (
                <button className="rounded-full bg-red-300"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <img src="../assets/maki.jpg" alt="menu-icon" />
                </button>
            )}
        </div>
    </nav>
  )
}

export default Navbar
