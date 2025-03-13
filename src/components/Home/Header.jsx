import Logo from "../../images/takiphizmeti.svg";
import "../../css/header.css";
import MenuBar from "../../images/menu.svg";
import Close from "../../images/close.svg";
import { useState } from "react";

const Header = () => {
    const [offcanvas, setOffcanvas] = useState(false);

    return (
        <>
            {/* Offcanvas Menu */}
            <div className={`fixed w-screen h-screen bg-transparent-black z-50 mt-[70px] transition-all duration-300 ${offcanvas ? "block translate-x-0 opacity-100" : "w-[0px] translate-x-full opacity-0"}`}>
                <div className="bg-white relative end-0 w-full h-full z-50 flex flex-col items-end py-8 pe-5 gap-5">
                    <p className="garet-500 text-2xl cursor-pointer">Anasayfa</p>
                    <p className="garet-500 text-2xl cursor-pointer">Hizmetlerimiz</p>
                    <p className="garet-500 text-2xl cursor-pointer">Destek</p>
                    <p className="garet-500 text-2xl cursor-pointer">Giriş yap</p>
                </div>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center px-4 border border-x-0 border-t-0 border-gray-200 py-3 z-50">
                <div className="container mx-auto flex items-center justify-between">
                    <img src={Logo} className="w-[45px] lg:w-[75px]" alt="Logo" />
                    <div className="items-center lg:flex hidden gap-6">
                        <p className="garet-500 text-xl cursor-pointer">Anasayfa</p>
                        <p className="garet-500 text-xl cursor-pointer">Hizmetlerimiz</p>
                        <p className="garet-500 text-xl cursor-pointer">Destek</p>
                        <p className="garet-500 text-xl cursor-pointer">Giriş yap</p>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <img src={MenuBar} alt="MenuBar"  onClick={() => setOffcanvas(!offcanvas)}  className={`invert w-[35px] absolute transition-all duration-300 ${offcanvas ? "transform-[rotate(-90deg)] opacity-0" : "transform-[rotate(0deg)] opacity-100"}`} />
                        <img src={Close} alt="CloseMenuBar" onClick={() => setOffcanvas(!offcanvas)} className={`invert w-[35px] transition-all duration-300 ${offcanvas ? "transform-[rotate(-90deg)] opacity-100" : "transform-[rotate(0deg)] opacity-0"}`} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
