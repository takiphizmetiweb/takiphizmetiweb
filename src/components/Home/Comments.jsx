import { Swiper, SwiperSlide } from 'swiper/react';
import StarOk from "../../images/starOk.svg"
import StarOff from "../../images/starOff.svg"
import { Autoplay } from "swiper/modules"; 
import 'swiper/css';
import "../../css/comments.css"


const Comments = () => {
    return(
        <>
            <div className="flex flex-col items-center h-[500px] my-62">
                <p className="inter-600 text-red-500 font-bold text-6xl ">Müşterilerimizden Yorumlar</p>
                <Swiper spaceBetween={50} className='max-w-[98vw] my-24' modules={[Autoplay]} slidesPerView={2} autoplay={{ delay: 3000 }}>
                    <SwiperSlide>
                        <div className='bg-theme-gray p-6 ps-10 flex flex-col rounded-lg w-[800px]'>
                            <div className="flex gap-3">
                                <p className='inter-600 text-bold text-white text-5xl'>Tunahan Çiftçi <span className='inter-500 text-regular text-5xl'>/</span></p>
                                <div className="flex gap-4">
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOff} className='w-[40px]' alt="Star Off" />
                                </div>
                            </div>
                            <p className='inter-500 text-white mt-5'>Verdiğiniz hizmet gayet kaliteliydi,  siparişin anında yansımamasında biraz tedirgin oldum ama 5 dakika sonra geldi, teknik destek hızlıydı. Sadece takipçi sayım anında artmadı, bir gün içerisinde hepsi geldi.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-theme-gray p-6 ps-10 flex flex-col rounded-lg w-[800px]'>
                            <div className="flex gap-3">
                                <p className='inter-600 text-bold text-white text-5xl'>Tunahan Çiftçi <span className='inter-500 text-regular text-5xl'>/</span></p>
                                <div className="flex gap-4">
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOff} className='w-[40px]' alt="Star Off" />
                                </div>
                            </div>
                            <p className='inter-500 text-white mt-5'>Verdiğiniz hizmet gayet kaliteliydi,  siparişin anında yansımamasında biraz tedirgin oldum ama 5 dakika sonra geldi, teknik destek hızlıydı. Sadece takipçi sayım anında artmadı, bir gün içerisinde hepsi geldi.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-theme-gray p-6 ps-10 flex flex-col rounded-lg w-[800px]'>
                            <div className="flex gap-3">
                                <p className='inter-600 text-bold text-white text-5xl'>Tunahan Çiftçi <span className='inter-500 text-regular text-5xl'>/</span></p>
                                <div className="flex gap-4">
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOff} className='w-[40px]' alt="Star Off" />
                                </div>
                            </div>
                            <p className='inter-500 text-white mt-5'>Verdiğiniz hizmet gayet kaliteliydi,  siparişin anında yansımamasında biraz tedirgin oldum ama 5 dakika sonra geldi, teknik destek hızlıydı. Sadece takipçi sayım anında artmadı, bir gün içerisinde hepsi geldi.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-theme-gray p-6 ps-10 flex flex-col rounded-lg w-[800px]'>
                            <div className="flex gap-3">
                                <p className='inter-600 text-bold text-white text-5xl'>Tunahan Çiftçi <span className='inter-500 text-regular text-5xl'>/</span></p>
                                <div className="flex gap-4">
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOff} className='w-[40px]' alt="Star Off" />
                                </div>
                            </div>
                            <p className='inter-500 text-white mt-5'>Verdiğiniz hizmet gayet kaliteliydi,  siparişin anında yansımamasında biraz tedirgin oldum ama 5 dakika sonra geldi, teknik destek hızlıydı. Sadece takipçi sayım anında artmadı, bir gün içerisinde hepsi geldi.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-theme-gray p-6 ps-10 flex flex-col rounded-lg w-[800px]'>
                            <div className="flex gap-3">
                                <p className='inter-600 text-bold text-white text-5xl'>Tunahan Çiftçi <span className='inter-500 text-regular text-5xl'>/</span></p>
                                <div className="flex gap-4">
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOff} className='w-[40px]' alt="Star Off" />
                                </div>
                            </div>
                            <p className='inter-500 text-white mt-5'>Verdiğiniz hizmet gayet kaliteliydi,  siparişin anında yansımamasında biraz tedirgin oldum ama 5 dakika sonra geldi, teknik destek hızlıydı. Sadece takipçi sayım anında artmadı, bir gün içerisinde hepsi geldi.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-theme-gray p-6 ps-10 flex flex-col rounded-lg w-[800px]'>
                            <div className="flex gap-3">
                                <p className='inter-600 text-bold text-white text-5xl'>Tunahan Çiftçi <span className='inter-500 text-regular text-5xl'>/</span></p>
                                <div className="flex gap-4">
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOff} className='w-[40px]' alt="Star Off" />
                                </div>
                            </div>
                            <p className='inter-500 text-white mt-5'>Verdiğiniz hizmet gayet kaliteliydi,  siparişin anında yansımamasında biraz tedirgin oldum ama 5 dakika sonra geldi, teknik destek hızlıydı. Sadece takipçi sayım anında artmadı, bir gün içerisinde hepsi geldi.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-theme-gray p-6 ps-10 flex flex-col rounded-lg w-[800px]'>
                            <div className="flex gap-3">
                                <p className='inter-600 text-bold text-white text-5xl'>Tunahan Çiftçi <span className='inter-500 text-regular text-5xl'>/</span></p>
                                <div className="flex gap-4">
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOk} className='w-[40px]' alt="Star" />
                                    <img src={StarOff} className='w-[40px]' alt="Star Off" />
                                </div>
                            </div>
                            <p className='inter-500 text-white mt-5'>Verdiğiniz hizmet gayet kaliteliydi,  siparişin anında yansımamasında biraz tedirgin oldum ama 5 dakika sonra geldi, teknik destek hızlıydı. Sadece takipçi sayım anında artmadı, bir gün içerisinde hepsi geldi.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className='bg-red-500 hover:bg-red-600 transition-all duration-300 w-[250px] text-center rounded-lg py-4 text-3xl roboto-600 text-bold text-white'>Daha Fazla</button>
            </div>
        </>
    )
}

export default Comments