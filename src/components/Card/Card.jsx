import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

const Card = ({ integrante }) => {

    return ( 
        <>
            <div className="card">
                <h2>{integrante.nome}</h2>
                <ul style={{display: "flex", listStyleType: "none", padding: "0", gap: "8px"}}>
                    <li><Link to={`/Experiencia/${integrante.id}`}>Experiencia</Link></li>
                    <li><Link to={`/Formacao/${integrante.id}`}>Formacao</Link></li>
                    <li><Link to={`/Hobbies/${integrante.id}`}>Hobbies</Link></li>
                    <li><Link to={`/Sobre/${integrante.id}`}>Sobre</Link></li>
                </ul>
                <Link to={`/Cep/${integrante.cep}`}><Button>Verificar CEP</Button></Link>
            </div>
        </>
    );
}
 
export default Card;