import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { IComic } from "../../components/Card/Card"
import { clearCart, decreaseCart, getTotal, increaseCart, removeFromCart } from "../../features/cart/cartSlice"
import { toast } from "react-toastify"
import { useEffect } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Container from "."

const Cart = () => {
    const cart = useAppSelector(state => state.itemsCart.cartItems)
    const cartTotal = useAppSelector(state => state.itemsCart.cartTotalAmount)
    const dispatch = useAppDispatch()

    function handleRemoveFromCart(item: IComic) {
        dispatch(removeFromCart(item))
        toast.success("Removido com sucesso!", {
            position: "bottom-left"
        })
    }

    function handleClearCart() {
        dispatch(clearCart())
    }
    
    function handleDecrease(item: IComic) {
        dispatch(decreaseCart(item))
    }
    
    function handleIncrease(item: IComic) {
        dispatch(increaseCart(item))
    }

    useEffect(() => {
        dispatch(getTotal())
    }, [cart])

    return (
        <>
            <Header/>
            <Container className="cartContainer">
                <h2>Carrinho de Compras</h2>
                { 
                    cart.length === 0 
                    ? (
                        <div className="cartEmpty">
                            <h3>Carrinho Vazio</h3>

                            <div className="startShopping">
                                <Link to={"/"}>
                                    <AiOutlineArrowLeft/>
                                    <span>Comece a comprar!</span>
                                </Link>
                            </div>
                        </div>
                    )
                    : (
                        <div>
                            <ul className="cartItems">
                                {
                                    cart.map((item, index) => {
                                        const srcImg = item.thumbnail.path + "." + item.thumbnail.extension
                                        const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
                                        const validatePrice = item.prices[0].price.toLocaleString('pt-BR', format)
                                        const priceWithoutValidation = item.prices[0].price

                                        return (
                                            <li key={index}>
                                                <div className="cartProduct">
                                                    <h3 className="productTitle">Produto</h3>
                                                    <img src={srcImg} alt={item.title}/>

                                                    <div>
                                                        <h4>{ item.title }</h4>
                                                        <button onClick={() => handleRemoveFromCart(item)}>Remover</button>
                                                    </div>
                                                </div>

                                                
                                                <div className="cartPrice">
                                                    <h3 className="price">Preço</h3>
                                                    <p>{ validatePrice }</p>
                                                </div>

                                                <div className="cartQuantity">
                                                    <div>
                                                        <h3 className="quantity">Quantidade</h3>    
                                                    </div>

                                                    <div className="cartQuantityBtns">
                                                        <button onClick={() => handleDecrease(item)}>-</button>
                                                        <p>{ item.cartQuantity }</p>
                                                        <button onClick={() => handleIncrease(item)}>+</button>
                                                    </div>
                                                </div>

                                                <div className="cartTotal">
                                                    <h3 className="total">Total</h3>   
                                                    ${ priceWithoutValidation * item.cartQuantity! }
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="cartSummary">
                                <button onClick={() => handleClearCart()}>Limpar carrinho</button>

                                <div className="cartCheckout">
                                    <div className="subtotal">
                                        <span>Subtotal</span>
                                        <span>${cartTotal}</span>
                                    </div>

                                    <div className="continueShopping">
                                        <Link to={"/"}>
                                            <AiOutlineArrowLeft/>
                                            <span>Continue a comprar!</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Container>
            <Footer/>
        </>
    )
}

export default Cart