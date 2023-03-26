import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    return (
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

            <AiOutlineShoppingCart/>
        </header>
    )
}

export default Header