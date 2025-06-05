import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const NavBar = () => {
    const {login} = useContext(AuthContext)

    return(
        <nav className="bg-black d-flex items-center justify-between px-9 py-1">
            <img className="h-14 rounded-full" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740"/>
            <ul className="flex gap-5 m-0 text-white font-bold">
                <li>
                    Home
                </li>
                <li> 
                    Orders
                </li>
                <li>
                    About Us
                </li>
            </ul>
        </nav>
    )

}

export default NavBar