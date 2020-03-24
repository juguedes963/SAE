import React from 'react'
import{ Link} from 'react-router-dom'
import './CompomentsF/Style/Cadastro.css'
export default function Login(){
    return(
        <div className="cadastro">
            <aside className="left">
                <p>
                   Para Acessar a pagina do participante e necessario um breve cadastro
            
                </p>
                <button ><Link to="/cadastro" className="Link">Cadastro</Link></button>
            </aside>
            <aside className="right">
               
            </aside>
            
        </div>
    )
}