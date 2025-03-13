import Article from "./Article"
import Comments from "./Comments"
import Header from "./Header"
import Info from "./Info"
import Faq from "./Faq"
import Footer from "./Footer"

const HomeMain = () => {
    return(
        <>
            <Header />
            <Article />
            <Info /> 
            <Comments />
            <Faq />
            <Footer />
        </>
    )
}

export default HomeMain