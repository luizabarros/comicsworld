import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getComics } from "../../features/comics/comicsSlice"
import { getCurrentOffset } from "../../features/offset/offsetSlice"
import { useNavigate } from "react-router-dom"
import ReactPaginate from "react-paginate"
import api from "../../services/api"
import List from "."

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
    description?: string
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

    return (
        <>
            <List>
                {
                    comics.map(({ id, title, thumbnail, prices }, index) => {
                        const srcImg = thumbnail.path + "." + thumbnail.extension
                        const validatePrice = prices[0].price === 0 ? 1.99 : prices[0].price 
                        const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

                        return (
                            <li 
                            key={ index }>
                                <div>
                                    <img 
                                    src={ srcImg } 
                                    alt={ title }
                                    onClick={() => goToExpandedItem(id)}/>
                                </div>
                                
                                <h2 
                                onClick={() => goToExpandedItem(id)}>{ title }</h2>
                                
                                <p>{ validatePrice.toLocaleString('pt-BR', format) }</p>
                                <p>Adicionar ao carrinho</p>
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