import '../css/Inicio.css'
import React from "react";
import Cabecalho from './cabecalho';

function Inicio(){
    const EscolhaUsuario = (escolha) =>{
        if (escolha === "cadastrar"){
          window.open("http://localhost:3000?cadastrar","_self")
        } else if(escolha === "entrar"){
          window.open("http://localhost:3000?entrar","_self")
        } else if(escolha === "alterar"){
          window.open("http://localhost:3000?alterar","_self")
        }
      }
    
    return(
        <>
       <section id='principal'>
          <Cabecalho/>
          <p>With supporting text below as a natural lead-in addittionl content.</p>
          <button id="cadastrar" onClick={()=>EscolhaUsuario("cadastrar")}>Cadastrar Entrada de Veiculos</button>
          <button id="alterar" onClick={()=>EscolhaUsuario("alterar")}>Alterar status de serviços</button>
        
      </section>
    </>
    );
}

export default Inicio