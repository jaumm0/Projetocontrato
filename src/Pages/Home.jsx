import react from "react"
import Main from "./ComponentsHome/Main"

function    Home () {
    return(
    <main>
        <header>
            <nav>
                <ul className="py-4 bg-greenSub text-white ">
                    <li className="grid grid-cols-4 w-150 mx-auto place-items-center place-self-end transition-color duration-100 rounded-lg">
                        <a className="p-2 rounded-md font-bold hover:bg-greenNav" href="/">Home</a>
                        <a className="p-2 rounded-md font-bold hover:bg-greenNav" href="/Planos">Planos</a>
                        <a className="p-2 rounded-md font-bold hover:bg-greenNav" href="/Dashboard">Dashboard</a>
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