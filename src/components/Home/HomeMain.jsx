import Article from "./Article"
import Comments from "./Comments"
import Header from "./Header"
import Info from "./Info"
import Faq from "./Faq"

const HomeMain = () => {
    return(
        <>
            <Header />
            <Article />
            <Info /> 
            <Comments />
            <Faq />
        </>
    )
}

export default HomeMain