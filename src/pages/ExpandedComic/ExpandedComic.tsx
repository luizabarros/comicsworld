import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Container from "."
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"

const ExpandedComic = () => {
    const { id } = useParams()
    const comics = useAppSelector(state => state.comics.comics)

    const foundComic = comics.find(comic => comic.id === Number(id))

    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
    const validatePrice = foundComic?.prices[0].price === 0 ? 1.99 : foundComic?.prices[0].price 
    const srcImg = foundComic?.thumbnail.path + "." + foundComic?.thumbnail.extension

    return (
        <>
            <Header/>
            <Container>
                <img 
                src={ srcImg } 
                alt={ foundComic?.title }/>

                <div>
                    <h2>{ foundComic?.title }</h2>
                    <p>{ foundComic?.description }</p>
                    <p>{ validatePrice?.toLocaleString('pt-BR', format) }</p>
                    <button>Adicionar ao carrinho</button>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default ExpandedComic