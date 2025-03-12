import FooterBottomRed from "../../images/footer-red-bottom.png"
import Logo from "../../images/takiphizmeti.svg"

const Footer = () => {
    return(
        <>
        <div className="flex flex-col">
            <div className="flex gap-42 ps-24 w-full">
                <div className="flex flex-col">
                    <p className="roboto-600 text-bold text-4xl">Sayfalarımız</p>
                    <ul className="list-disc mt-5 ms-5">
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Anasayfa</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Hizmetlerimiz</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Destek</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Giriş yap</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className="roboto-600 text-bold text-4xl">Hizmetlerimiz</p>
                    <ul className="list-disc mt-5 ms-5">
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Instagram</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Facebook</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Youtube</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">TikTok</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Spotify</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Discord</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Google</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Twitch</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Telegram</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className="roboto-600 text-bold text-4xl">Hakkımızda</p>
                    <ul className="list-disc mt-5 ms-5">
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Hakkımızda</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Yorumlar</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Yorum ekle</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">İletişim</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className="roboto-600 text-bold text-4xl">Ödeme ve Sistem</p>
                    <ul className="list-disc mt-5 ms-5">
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Sipariş şartları</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Gizlilik ve Güvenlik</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="inter-500 text-xl">Uzaktan Alışveriş</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <img src={FooterBottomRed} alt="FooterBottomRed" />
                <img src={Logo} className="me-12 mb-12 w-[95px]" alt="Takip hizmeti logo" />
            </div>
        </div>
            
        </>   
    )
}

export default Footer