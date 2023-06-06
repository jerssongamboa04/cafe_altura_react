import React from 'react'
import Truck from '../../Assets/Truck.png'
import order from '../../Assets/order.png'
import gift from '../../Assets/gift.png'
import cafeDeFondo from '../../Assets/cafeDeFondo.jpeg'
import CardSectionTwo from '../CardSectionTwo/CardSectionTwo'



const SectionTwo = () => {
    return (

        <section className="p-[3rem] mx-auto text-center bg-cover bg-center bg-cafeFondo"  >
            <h2 className="text-2xl text-white mb-4 fsTitle">Café con las mejores condiciones</h2>
            <div className='flex justify-center items-center'>
                <CardSectionTwo title={'Recibe tu pedido sin preocuparte'} description={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'} img={order} />
                <CardSectionTwo title={'Envío en 24/48h'} description={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'} img={Truck} />
                <CardSectionTwo title={'Descuentos y beneficios'} description={'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.'} img={gift} />
            </div>
        </section>

    )
}

export default SectionTwo