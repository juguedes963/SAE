import React from 'react'
import './CompomentsF/Style/Conteudo.css'
export default function Conteudo() {
    return (
        <div className="container">
            <aside className="left">
                <h1>
                    Sistema de Assistencia ao Estudante
    </h1>
            </aside>
            <aside className="right">
                <div className="container-right">
                    <div className="table-1">

                        <div className="conteudo-edital">
                            <p>Ultimo  Edital</p>
                            <a href="#">Confira aqui o ultimo edital lancado</a>
                        </div>
                        <div className="conteudo-edital">
                            <p>Chamadas:Lista de Espera</p>
                            <a href="#">Confira aqui o Lista de Espera</a>
                        </div>
                    </div>
                    <div className="table-2">

                        <div className="conteudo-edital">
                            <p>Resultados Parcias e Finais</p>
                            <a href="#">Confira aqui os Resultados Parcias ou final</a>
                        </div>
                        <div className="conteudo-edital">
                            
                            <form>
                                <input type="text" placeholder="Pesquisar"/>
                                <input type="submit" className="busca" value="IR"/>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>

        </div>

    )
}