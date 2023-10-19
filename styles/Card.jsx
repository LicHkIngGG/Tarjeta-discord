import React from 'react'
import './styles/Cars.css'
function Card(props) 
{
    const card=props.card
    const theme=card.theme
    return(
        <section className={`organismo-contenedor ${theme}`}>
              
                <img src={perfil.imgUrl} alt={cars.title} />
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              
        </section>

    )
}
export default Cars