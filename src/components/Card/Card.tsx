import { useState, useEffect } from "react"
import api from "../../services/api"

interface IComic {
    count: number,
    limit: number,
    offset: number,
    results: {
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
    }[]
    total: number
}

const Card = () => {
    const [comics, setComics] = useState<IComic>()

    useEffect(() => {
        async function getComics() {
            const response = await api.get("")
            setComics(response.data.data)
        }
        getComics()
    }, [])

    return (
        <ul>
            {
                comics?.results.map(({ id, title, thumbnail, prices }) => {
                    const srcImg = thumbnail.path + "." + thumbnail.extension
                    const validatePrice = prices[0].price == 0 ? 1.99 : prices[0].price 
                    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

                    return (
                        <li key={ id }>
                            <img src={ srcImg } alt={ title }/>
                            <h2>{ title }</h2>
                            <p>{ validatePrice.toLocaleString('pt-BR', format) }</p>
                            <p>Adicionar ao carrinho</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Card