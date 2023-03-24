import { useState, useEffect, useRef } from "react"
import api from "../../services/api"

interface IComic {
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

const Card = () => {
    const [comics, setComics] = useState<IComic[] | []>([])
    const [currentOffset, setCurrentOffset] = useState<number>(0)
    const loadMoreRef = useRef(null)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        }

        const observer = new IntersectionObserver((entities) => {
            const target = entities[0]

            if (target.isIntersecting) {
                setCurrentOffset(old => old + 8)
            }
        }, options)

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current)
        }
    }, [])

    useEffect(() => {
        async function infiniteScrolling() {
            const response = await api.get("", {
                params: {
                    limit: 8,
                    offset: currentOffset
                }
            })

            const newComics = response.data.data.results
            setComics(oldComics => [...oldComics, ...newComics])
        }
        infiniteScrolling()
    }, [currentOffset])

    return (
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
            <p ref={loadMoreRef}>Carregando mais HQs...</p>
        </ul>
    )
}

export default Card