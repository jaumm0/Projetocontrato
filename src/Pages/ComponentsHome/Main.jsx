import React from "react";


function Main() {
    return(
       <main className="grid border grid-cols-3 place-items-start bg-greenSub  px-10 py-10 h-150 text-white rounded-4xl mx-50  mt-10">
        <div className="rounded-4xl h-130 w-140 flex items-center justify-center ">
            <div className="py-30 px-33  bg-white rounded-full ">
            <h1 className="text-6xl w-80 h-70 text-greenNav font-bold">
                Saúde mais prática e acessível
            </h1>
            <p className="text-2xl font-bold text-greenNav">para TODO MUNDO.</p>
            <span>
                <img src="" alt="" />
            </span>
            </div>
        </div>
        <div className=" place-self-center bg-white h-70 w-60 rounded-4xl flex items-center  justify-center flex-col" >
            <span className="text-greenNav ">MENSALIDADES <br/>"a partir de 12x</span>
            <p className="text-greenNav text-2xl font-bold">R$ 39,90</p>  
            <div>
                <button className="font-bold bg-greenNav w-40 h-15 text-white  rounded-3xl hover:rounded-2xl border-white cursor-pointer  hover:bg-white hover:border hover:border-greenNav  hover:text-greenNav transition-all duration-150s place-self-start mt-20">
                    <a href="/Dashboard">
                        Quero Adquirir</a>
                    </button> 
                </div>    
        </div>
            
       </main>
    )
}
export default Main;