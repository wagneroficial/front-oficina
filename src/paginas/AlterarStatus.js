import React from "react";
import Inicio from './Inicio'
import "../css/AlterarStatus.css"

function AlterarStatus(){

    return (
        <>
            <Inicio/>
            <input type="text"/>
           <table id="dados">
            <tr>
                <td>HUS-1212</td>
                <td>|FIAT|</td>
                <td>|TIPO|</td>
                <td>|SERVIÇO AUARDANDO PEÇAS</td>
                <td><button>Alterar Status</button></td>
            </tr>
             <tr>
                <td>HUS-1212</td>
                <td>|FIAT|</td>
                <td>|TIPO|</td>
                <td>|SERVIÇO AUARDANDO PEÇAS</td>
                <td><button>Alterar Status</button></td>
            </tr>
           </table>
        </>
    )
}
export default AlterarStatus;