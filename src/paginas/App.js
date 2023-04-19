import React,{useState,useEffect} from 'react'
import CadastroVeiculos from './CadastroVeiculos';
import Inicio from './Inicio'
import AlterarStatus from './AlterarStatus';


function App() {

  const [pagina,setPagina] = useState("entrar")

  useEffect(
    ()=>{
      const url =window.location.href
      const resposta = url.split("?")
      setPagina(resposta[1])
    }
  )


  const entrar = () =>{
    if(pagina === "cadastrar"){
      return <CadastroVeiculos/>
    }else if(pagina === "alterar"){
      return <AlterarStatus/>
    } else {
      return <Inicio/>
  }
  }
  return (
    <>
    {entrar()}
    </>
  );

}

export default App;
