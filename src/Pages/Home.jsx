import react from "react"
import Main from "./ComponentsHome/Main"
import { Link } from "react-router-dom";

function    Home () {
    return(
    <main>
        <header>
            <nav>
                <ul className="py-4 bg-greenSub text-white ">
                    <li className="grid grid-cols-4 w-150 mx-auto place-items-center place-self-end transition-color duration-100 rounded-lg">
                        <Link className="p-2 rounded-md font-bold hover:bg-greenNav" to="/">Home</Link>
                        <Link className="p-2 rounded-md font-bold hover:bg-greenNav" to="/Planos">Planos</Link>
                        <Link className="p-2 rounded-md font-bold hover:bg-greenNav" to="/Dashboard">Dashboard</Link>
                        <button>
                            <a className="p-2 rounded-md font-bold hover:bg-greenNav hover:border " href="/Dashboard">Entrar</a>
                        </button>
                    </li>
                </ul>
            </nav>
            
        </header>
        <Main>  </Main>
        </main>
        
    )

}
export default Home