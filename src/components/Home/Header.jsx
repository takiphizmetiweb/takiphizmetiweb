import Logo from "../../images/takiphizmeti.svg"
import "../../css/header.css"

const Header = () => {
    return(
        <>
            <div className="flex justify-between items-center px-4 border border-x-0 border-t-0 border-gray-200 py-3">
                <div className="container mx-auto flex items-center justify-between">
                    <img src={Logo} className="w-[75px]" alt="Logo" />
                    <div className="flex gap-6">
                        <p className="garet-500 text-xl cursor-pointer">Anasayfa</p>
                        <p className="garet-500 text-xl cursor-pointer">Hizmetlerimiz</p>
                        <p className="garet-500 text-xl cursor-pointer">Destek</p>
                        <p className="garet-500 text-xl cursor-pointer">Giriş yap</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header