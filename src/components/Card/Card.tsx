import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getComics } from "../../features/comics/comicsSlice"
import { getCurrentOffset } from "../../features/offset/offsetSlice"
import ReactPaginate from "react-paginate"
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
}

interface ICurrentPage {
    selected: number
}

const Card = () => {
    const comics = useAppSelector(state => state.comics.comics)
    const offset = useAppSelector(state => state.offset.currentOffset)
    const dispatch = useAppDispatch()

    useEffect(() => {
        async function getItems() {
            console.log(offset)
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

    return (
        <>
            <ul>
                {
                    comics.map(({ title, thumbnail, prices }, index) => {
                        const srcImg = thumbnail.path + "." + thumbnail.extension
                        const validatePrice = prices[0].price == 0 ? 1.99 : prices[0].price 
                        const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

                        return (
                            <li key={ index }>
                                <img src={ srcImg } alt={ title }/>
                                <h2>{ title }</h2>
                                <p>{ validatePrice.toLocaleString('pt-BR', format) }</p>
                                <p>Adicionar ao carrinho</p>
                            </li>
                        )
                    })
                }
            </ul>
            
            <ReactPaginate
            previousLabel={"Anterior"}
            nextLabel = {"Próxima"}
            pageCount={5}
            onPageChange={changePage}
            />
        </>
    )
}

export default Card 