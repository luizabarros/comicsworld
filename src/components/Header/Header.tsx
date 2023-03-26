import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import Container from "."

const Header = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <header onClick={() => navigate("/")}>
                <h1>ComicsWorld</h1>

                <div>
                    <AiOutlineSearch/>  
                    <input 
                    type="search" 
                    name="searchbar" 
                    id="searchbar"
                    placeholder="Pesquise um item"/>
                </div>

                <div className="cart">
                    <AiOutlineShoppingCart/>
                    <span className="bagQuantity">
                        <span>0</span>
                    </span>
                </div>
            </header>
        </Container>
    )
}

export default Header