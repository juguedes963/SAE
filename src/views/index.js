import React from 'react'
import Nav from './configs/navbar'
import Conteudo from './configs/conteudo'
import './Style/index.css'
import Texto from './configs/cadastro'
export default function PageIndex(){
    return(
    <div>
    <div><Nav/></div>
     <div>  <Conteudo/></div> 
    <div><Texto /></div>
    </div>
    )
}