import User from "../../images/user.svg"
import Happy from "../../images/happy.svg"
import HandPhoneLike from "../../images/phoneWithLike.svg"

const Info = () => {
    return(
        <>
            <div className="flex justify-center items-center h-[650px] mb-86 gap-32">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col">
                        <p className="text-red-500 inter-600 text-6xl mb-5">Takip Hizmeti <span className="text-black">nedir?</span></p>
                        <div className="bg-theme-gray relative overflow-hidden p-5 px-10 w-[760px] rounded-lg">
                            <p className="text-white inter-600 text-bold text-xl w-3/4">Takip Hizmeti, bir çok sosyal medya platformunda beğeni yorum gibi hizmetler sağlamakla beraber bunu en düşük ücretlerle yapar, müşterilerinin memnuniyeti için çalışır.</p>
                            <img src={User} alt="User" className="absolute opacity-70 w-1/4 end-[20px] top-[-30px] scale-[1.5]"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-red-500 inter-600 text-6xl mb-5"><span className="text-black">Neden</span> Takip Hizmeti<span className="text-black">?</span></p>
                        <div className="bg-theme-gray relative overflow-hidden p-5 px-10 w-[760px] rounded-lg">
                            <p className="text-white inter-600 text-bold text-xl w-3/4">Takip hizmetinin misyonu sadece müşterilerini memnun etmektir ve bu amacı üzerinde odaklanmıştır. Müşterimiz memnunsa <span className="text-red-500">Takip Hizmeti</span>’de memnundur.</p>
                            <img src={Happy} alt="User" className="absolute opacity-70 w-1/4 end-[20px] top-[-30px] scale-[1.5]"/>
                        </div>
                    </div>
                </div>
                <img src={HandPhoneLike} className="h-[400px]" alt="Like with Hand and Phone" />
            </div>
        </>
    )
}

export default Info