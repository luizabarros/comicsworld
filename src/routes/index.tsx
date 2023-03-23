import { Route, Routes } from "react-router-dom"
import Cart from "../pages/Cart/Cart"
import ExpandedItem from "../pages/ExpandedComic/ExpandedComic"
import LandingPage from "../pages/LandingPage/LandingPage"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <LandingPage/> }/>
            <Route path="/carrinho" element={ <Cart/> }/>
            <Route path="/item/:id" element={ <ExpandedItem/> }/>
        </Routes>
    )
}

export default MainRoutes