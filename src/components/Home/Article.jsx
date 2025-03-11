import "../../css/article.css"
import Marquee from "react-fast-marquee";
import Instagram from "../../images/instagram.svg"
import Discord from "../../images/discord.svg"
import Facebook from "../../images/facebook.svg"
import Google from "../../images/google.svg"
import Spotify from "../../images/spotify.svg"
import Twitch from "../../images/twitch.svg"
import Tiktok from "../../images/tiktok.svg"
import Twitter from "../../images/twitter.svg"
import Telegram from "../../images/telegram.svg"
import Youtube from "../../images/youtube.svg"

const Article = () => {
    return(
        <>
            <div className="flex h-spec-screen-1 justify-center items-center w-full">
                <div className="flex flex-col justify-center  items-center me-12 gap-0 w-1/2">
                    <div className="flex flex-col me-12">
                        <p className="inter-600 text-7xl"><span className="text-red-500">Takip Hizmeti </span>ile</p>
                        <p className="inter-600 fw-bold text-[100px] leading-[100px]">HESABINIZI</p>
                        <p className="inter-600 fw-bold text-[110px] text-red-500 leading-[125px]">BÜYÜTÜN!</p>
                        <div className="flex gap-8">
                            <button className="bg-red-500 roboto-600 text-white w-[200px] mt-6 text-center py-3 rounded-lg text-2xl">Satın Al</button>
                            <button className="bg-red-500 roboto-600 text-white w-[200px] mt-6 text-center py-3 rounded-lg text-2xl">Bilgi Al</button>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-theme-gray p-4 rounded-s-4xl w-1/2">
                    <Marquee >
                            <img src={Instagram} className="w-[70px] mx-8" alt="Instagram" />
                            <img src={Discord} className="w-[70px] mx-8" alt="Discord" />
                            <img src={Facebook} className="w-[70px] mx-8" alt="Facebook" />
                            <img src={Google} className="w-[70px] mx-8" alt="Google" />
                            <img src={Spotify} className="w-[70px] mx-8" alt="Spotify" />
                            <img src={Twitch} className="w-[70px] mx-8" alt="Twitch" />
                            <img src={Tiktok} className="w-[70px] mx-8" alt="Tiktok" />
                            <img src={Twitter} className="w-[70px] mx-8" alt="Twitter" />
                            <img src={Telegram} className="w-[70px] mx-8" alt="Telegram" />
                            <img src={Youtube} className="w-[70px] mx-8" alt="Youtube" />
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default Article