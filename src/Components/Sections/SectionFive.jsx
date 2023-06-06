import React from 'react'
import { Link } from 'react-router-dom'
import direccion from '../../Assets/direccion.png'
import bar from '../../Assets/bar.jpg'



const SectionFive = () => {
  return (
    <section className="px-[40px] py-[48px] bg-[#f7f5f3]">
    <div className="flex m-[0.5rem]">
        <div className="flex flex-col justify-center max-w-[50%] p-6">
            <h3 className="text-[#2a5b45] font-semibold text-2xl py-4">Pruébalo en nuestro coffee shop</h3>
            <p className="text-sm">Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
            <div className="flex items-center py-4">
                <Link to="/" className='underline text-black font-semibold text-sm'>Cómo llegar</Link>
                <img className='ml-3' src={direccion} alt="" />
            </div>
        </div>
        <img src={bar} alt="foto bar" />
    </div>
</section>  )
}

export default SectionFive;