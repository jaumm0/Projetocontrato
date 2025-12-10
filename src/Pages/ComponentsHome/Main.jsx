import React from "react";
import FotoMedica from "../ComponentsHome/imgs/FotoMedica.png";
import { Link } from "react-router-dom";
import { Brain } from 'lucide-react';


function Main() {
  return (
    <main className="
    text-black
      grid 
      grid-cols-1          /* MOBILE: 1 coluna */
      md:grid-cols-2       /* MD+: 2 colunas */
      place-self-center
      gap-10
      pl-30 py-10
      rounded-4xl 
      mt-10
    ">
      
      {/* TEXTO */}
      <div className="">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl pt-5 text-black">
          O CARTÃO DE SAÚDE MAIS COMPLETO DO MS,
        </h1>

        <h2 className="font-bold text-xl md:text-3xl pt-2 text-black">
          SEM CARÊNCIA E LIMITE DE IDADE
        </h2>

        <p className="pt-5 pb-10 text-sm md:text-base lg:text-lg text-black ">
          Somos o Fidelidade Saúde, acreditamos que a saúde deve ser acessível para todos e que a prevenção faça parte da rotina das pessoas. Com mensalidades que cabem no bolso, você e sua família têm acesso a mais de 1.000 médicos credenciados, consultas a partir de R$ 49,90 e hospital com emergência 24 horas, além de vários outros benefícios.
        </p>
        

        <button className="
          bg-greenNav 
          rounded-xl  
          w-48 
          h-10 
          cursor-pointer 
          hover:border
          hover:border-greenLight
          hover:text-greenLight
          hover:bg-white
          transition-all 
          duration-200
        ">
            <Link>Conhecer Serviços</Link>
        </button>
        <section className=" w-70 h-35 place-self-end rounded-lg position fixed  top-120 right-200 shadow-2xl shadow-black-900 bg-white">
            <div className="  bg-rose-600 rounded-full w-15 h-15 p-1  m-5 place-items-start"><Brain color="pink" size={50} className="rounded-full "/></div>
            <h2 className="place-self-center position fixed top-127 left-230 text-2xl font-bold">Neurologica</h2>
            <p>lore</p>
        </section>
      </div>

      {/* IMAGEM */}
      <div className="flex justify-center md:justify-start w-full rounded-l-2xl  bg-bgMain  ">
        <img 
          className="md:w-72 lg:w-96 " 
          src={FotoMedica} 
          alt="Família" 
        />
      </div>
    </main>
  );
}

export default Main;
