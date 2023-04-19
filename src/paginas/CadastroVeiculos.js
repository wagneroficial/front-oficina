import "../css/CadastroVeiculos.css"
import React  from 'react'
import Cabecalho from "./cabecalho";

function CadastroVeiculos(){
    return (
        <>
           
            <section id="cadastrar">
                <Cabecalho/>
                <h3 id="cadastro">Cadastro de serviços</h3>

                <form>
                    <fieldset>
                    <p>
                        <input name="cliente"  id="cliente" placeholder="Proprietario" className="dadosCarro" required/>
                    </p>

                    <p>
                        <input name="contato" id="contato" placeholder="WhatsApp" className="dadosCarro" required/>
                    </p>

                    <p>
                    <input type='text' placeholder='Marca'  list='marcas' className="dadosCarro" required/>
                    <datalist id='marcas'> 
                        <option value={'Fiat'}></option>
                        <option value={'Mercedes-Benz'}></option>
                        <option value={'Volkswagen'}></option>
                        <option value={'Jeep'}></option>
                        <option value={'Nissan'}></option>
                        <option value={'Renault'}></option>
                        <option value={'BMW'}></option>
                        <option value={'Volvo'}></option>
                        <option value={'Chevrolet'}></option>
                        <option value={'Hyundai'}></option>
                        <option value={'Honda'}></option>
                    </datalist>
                </p>

                <p>
                    <input type='text' placeholder='Modelo' list='modelos' className="dadosCarro" required/>
                    <datalist id='modelos'>
                            <option value={"ONIX"}></option>
                            <option value={"ONIX PLUS"}></option>
                            <option value={'CRUZE'}></option>
                            <option value={"CRUZE SPORT6 RS"}></option>
                            <option value={"BMW iX"}></option>
                            <option value={"BMW Série 3 Sedã"}></option>
                            <option value={"BMW X5 Protection"}></option>
                            <option value={"Toro"}></option>
                            <option value={"Strada"}></option>
                            <option value={"Cronos"}></option>
                            <option value={"Volkswagen Gol"}></option>
                            <option value={"Volkswagen Virtus"}></option>
                            <option value={"Volkswagen Polo"}></option>
                            <option value={"Renegade"}></option>
                            <option value={"Compass"}></option>
                            <option value={"Wrangler"}></option>
                    </datalist>
                </p>

                <p>
                    <input type='text' placeholder='Placa' name='placa' id='placa' className="dadosCarro" required/>
                </p>

                <p>
                   <select  className="dadosCarro">
                        <option> Veículo recebido</option>
                        <option>Serviço Iniciado</option>
                        <option>Aguardando Peças</option>
                        <option>Finalizado</option>
                   </select>
                </p>
                    </fieldset>
                    <button id="salvar">Salvar</button>
                </form>
                <button id="cancelar">Cacelar</button>
            </section>
        </>

    )
}

export default CadastroVeiculos;