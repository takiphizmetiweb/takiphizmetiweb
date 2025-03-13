import User from "../../images/user.svg"
import Happy from "../../images/happy.svg"
import HandPhoneLike from "../../images/phoneWithLike.svg"

const Info = () => {
    return(
        <>
            <div className="flex justify-center xl:flex-row flex-col items-center h-[650px] xl:mt-0 mt-36 mb-86 gap-32">
                <div className="flex flex-col justify-between h-full lg:max-w-auto max-w-[98vw]">
                    <div className="flex flex-col lg:items-start items-center w-full lg:mt-0 mt-36">
                        <p className="text-red-500 inter-600 text-2xl lg:text-6xl mb-5">Takip Hizmeti <span className="text-black">nedir?</span></p>
                        <div className="bg-theme-gray relative overflow-hidden lg:mx-0 p-5 lg:px-10 lg:max-w-auto max-w-[95vw] w-full lg:w-[760px] rounded-lg">
                            <p className="text-white inter-600 text-bold text-xl  lg:w-3/4 ">Takip Hizmeti, bir çok sosyal medya platformunda beğeni yorum gibi hizmetler sağlamakla beraber bunu en düşük ücretlerle yapar, müşterilerinin memnuniyeti için çalışır.</p>
                            <img src={User} alt="User" className="absolute lg:block hidden  opacity-70 w-1/4 lg:end-[20px] lg:top-[-30px] scale-[1.5]"/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:items-start items-center xl:mt-0 mt-24">
                        <p className="text-red-500 inter-600 text-2xl lg:text-6xl mb-5"><span className="text-black">Neden</span> Takip Hizmeti<span className="text-black">?</span></p>
                        <div className="bg-theme-gray relative overflow-hidden  p-5 lg:px-10 lg:max-w-auto max-w-[95vw] w-full lg:w-[760px] rounded-lg">
                            <p className="text-white inter-600 text-bold text-xl lg:w-3/4">Takip hizmetinin misyonu sadece müşterilerini memnun etmektir ve bu amacı üzerinde odaklanmıştır. Müşterimiz memnunsa <span className="text-red-500">Takip Hizmeti</span>’de memnundur.</p>
                            <img src={Happy} alt="User" className="absolute lg:block hidden opacity-70 w-1/4 end-[20px] top-[-30px] scale-[1.5]"/>
                        </div>
                    </div>
                </div>
                <img src={HandPhoneLike} className="h-[200px] lg:mt-0 mt-24 lg:h-[400px]" alt="Like with Hand and Phone" />
            </div>
        </>
    )
}

export default Info