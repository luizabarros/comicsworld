import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getComics } from "../../features/comics/comicsSlice"
import { getCurrentOffset } from "../../features/offset/offsetSlice"
import { useNavigate } from "react-router-dom"
import { addToCart } from "../../features/cart/cartSlice"
import ReactPaginate from "react-paginate"
import List from "."
import api from "../../services/api"

export interface IComic {
    title: string,
    id: number,
    prices: {
        type: string,
        price: number
    }[],
    thumbnail: {
        extension: string,
        path: string
    }
    description?: string,
    cartQuantity?: number
}

interface ICurrentPage {
    selected: number
}

const Card = () => {
    const comics = useAppSelector(state => state.comics.comics)
    const offset = useAppSelector(state => state.offset.currentOffset)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        async function getItems() {
            const response = await api.get("", {
                params: {
                    limit: 10,
                    offset: offset
                }
            })

            const newComics = response.data.data.results
            dispatch(getComics(newComics))
        }
        getItems()
    }, [offset])

    function changePage({ selected }: ICurrentPage) {
        dispatch(getCurrentOffset(selected + 1))
    }

    function goToExpandedItem(id: number) {
        navigate(`item/${id}`)
    }

    function handleAddToCart(item: IComic) {
        dispatch(addToCart(item))
        navigate("/carrinho")
    }

    return (
        <>
            <List>
                {
                    comics.map((item, index) => {
                        const srcImg = item.thumbnail.path + "." + item.thumbnail.extension
                        const validatePrice = item.prices[0].price === 0 ? 1.99 : item.prices[0].price 
                        const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

                        return (
                            <li 
                            key={ index }>
                                <div>
                                    <img 
                                    src={ srcImg } 
                                    alt={ item.title }
                                    onClick={() => goToExpandedItem(item.id)}/>
                                </div>
                                
                                <h2 
                                onClick={() => goToExpandedItem(item.id)}>{ item.title }</h2>
                                
                                <p>{ validatePrice.toLocaleString('pt-BR', format) }</p>
                                <p onClick={() => handleAddToCart(item)}>Adicionar ao carrinho</p>
                            </li>
                        )
                    })
                }
            </List>

            <ReactPaginate
            previousLabel={"Anterior"}
            nextLabel = {"Próxima"}
            pageCount={5}
            containerClassName={"paginationBtns"}
            onPageChange={changePage}/>
        </>
    )
}

export default Card 