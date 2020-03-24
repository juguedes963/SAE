import React from 'react'
import './Style/Buttons.css'
import { Link } from 'react-router-dom'
export default function TopButtonsMenu(){
    return(
        <ul>
            <li>
                <a>SAE</a>
            </li>
            <li>
                <a>Principal</a>
            </li>
            <li>
                <a>Contatos</a>
            </li>
            <li>
                <a>Perguntas Frequentes</a>
            </li>
        </ul>
    )
}