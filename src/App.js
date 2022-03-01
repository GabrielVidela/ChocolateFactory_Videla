import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import NavBar from "./Components/NavBar"
import ItemListContainer from "./Components/ItemListContainer"


function App () {
    return (
        <>
            <Header/>
            <ItemListContainer greeting="Usuario/a"/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App