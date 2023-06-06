import React from 'react'
import { Link } from 'react-router-dom'
import Faq from '../Faq/Faq'
import arrow from '../../Assets/arrow.png'


const SectionFour = () => {
  return (
    <section className="bg-[#2a5b45] text-white text-center p-8">
            <h2 className="tsTitle my-[2rem] font-semibold text-2xl">Preguntas frecuentes</h2>
            <div className="my-[2rem] flex flex-col justify-center items-center">
                <Faq 
                title={'¿Cómo hago el pedido?'} 
                answer={'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café'}                  
                />
                <Faq 
                title={'¿Por qué los precios son tan bajos?'} 
                answer={'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'}
                />
                <Faq 
                title={'¿Es posible enviar café a mi oficina?'} 
                answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde beatae excepturi aut blanditiis, eum nesciunt recusandae tempore illum nihil error tempora dolor quod neque quasi quae hic rerum sint soluta.'}
                />
            </div>
            <div className="tsVerMas my-[2rem] flex justify-center items-center">
                <Link className='mr-[0.7rem] underline' to="/">Resolvemos tus dudas</Link>
                <img src={arrow} alt="row" />
            </div>
        </section>
        
        )
}

export default SectionFour