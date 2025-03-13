import FooterBottomRed from "../../images/footer-red-bottom.png"
import Logo from "../../images/takiphizmeti.svg"

const Footer = () => {
    return(
        <>
        <div className="flex flex-col">
            <div className="flex gap-42 lg:ps-24 w-full lg:flex-row flex-col lg:items-start items-center flex-wrap">
                <div className="flex flex-col lg:items-start items-center">
                    <p className="roboto-600 text-bold text-4xl">Sayfalarımız</p>
                    <ul className="list-disc mt-5 ms-5">
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Anasayfa</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Hizmetlerimiz</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Destek</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Giriş yap</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col lg:items-start items-center">
                    <p className="roboto-600 text-bold text-4xl">Hizmetlerimiz</p>
                    <ul className="list-disc mt-5 ms-5">
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Instagram</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Facebook</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Youtube</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">TikTok</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Spotify</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Discord</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Google</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Twitch</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Telegram</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col lg:items-start items-center">
                    <p className="roboto-600 text-bold text-4xl">Hakkımızda</p>
                    <ul className="list-disc mt-5 ms-5">
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Hakkımızda</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Yorumlar</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Yorum ekle</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">İletişim</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col lg:items-start items-center">
                    <p className="roboto-600 text-bold text-4xl">Ödeme ve Sistem</p>
                    <ul className="list-disc mt-5 ms-5">
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Sipariş şartları</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Gizlilik ve Güvenlik</a>
                        </li>
                        <li className="mt-5 lg:mt-3">
                            <a href="#" className="inter-500 text-2xl lg:text-xl">Uzaktan Alışveriş</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between lg:flex-row flex-col-reverse lg:items-end items-center ">
                <img src={FooterBottomRed} className="lg:w-auto w-full" alt="FooterBottomRed" />
                <img src={Logo} className="me-12 mb-12  lg:mt-0 mt-16 w-[95px]" alt="Takip hizmeti logo" />
            </div>
        </div>
            
        </>   
    )
}

export default Footer