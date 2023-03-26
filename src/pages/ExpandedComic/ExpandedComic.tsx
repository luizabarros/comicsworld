import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Container from "."
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { IComic } from "../../components/Card/Card"
import { addToCart } from "../../features/cart/cartSlice"
import { useNavigate } from "react-router-dom"

const ExpandedComic = () => {
    const { id } = useParams()
    const comics = useAppSelector(state => state.comics.comics)

    const navigate = useNavigate()

    const foundComic = comics.find(comic => comic.id === Number(id))

    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
    const validatePrice = foundComic?.prices[0].price.toLocaleString('pt-BR', format)
    const srcImg = foundComic?.thumbnail.path + "." + foundComic?.thumbnail.extension

    const dispatch = useAppDispatch()

    function handleAddToCart(item: IComic) {
        dispatch(addToCart(item))
        navigate("/carrinho")
    }

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
                    <p>{ validatePrice }</p>
                    <button onClick={() => handleAddToCart(foundComic!)}>Adicionar ao carrinho</button>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default ExpandedComic