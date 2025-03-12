import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import "../../css/faq.css"

const Faq = () => {
    return(
        <>
            <div className="flex flex-col items-center  mb-36">
                <p className='inter-600 text-bold text-5xl mb-12'><span className='text-red-500'>S</span>ıkça <span className='text-red-500'>S</span>orulan <span className='text-red-500'>S</span>orular</p>
                <Accordion transition transitionTimeout={250}>
                    <AccordionItem header="Sipariş süreci nasıl işliyor?">
                        a
                    </AccordionItem>
                    <AccordionItem header="Sipariş süreci nasıl işliyor?">
                        a
                    </AccordionItem>
                    <AccordionItem header="Sipariş süreci nasıl işliyor?">
                        a
                    </AccordionItem>
                    <AccordionItem header="Sipariş süreci nasıl işliyor?">
                        a
                    </AccordionItem>
                    <AccordionItem header="Sipariş süreci nasıl işliyor?">
                        a
                    </AccordionItem>
                </Accordion>
                <button className='bg-red-500 hover:bg-red-600 transition-all duration-300 w-[250px] text-center rounded-lg py-4 text-3xl roboto-600 text-bold text-white mt-24'>Diğer Sorular</button>
            </div>
        </>
    )
}

export default Faq