import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"

const Header = () => {
    return (
        <header>
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