import { GiChocolateBar } from "react-icons/gi"
import NavBar from "./NavBar"
function Header (){
    return (
        <header id="main-header">
            <h1>Chocolate Factory<GiChocolateBar/></h1>
            <NavBar/>
        </header>
    )
}

export default Header