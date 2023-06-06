import React from 'react'
import Hero from '../../Assets/Hero image.jpg'
import Button from '../Button/Button'

const SectionOne = () => {
  return (

    <section className='bg-[#E3DED7] px-[2.9rem] py-[3rem]'>
      <div className="flex m-4 [text-shadow:_2px_4px_3px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col justify-center max-w-[50%] py-4">

        <h3 className="font-semibold mainSubtitle py-4 text-[#2a5b45] text-[18px]">De la planta a tu taza</h3>
        <h2 className="mainTitle text-[40px] py-4 font-semibold ">El mejor café del mundo, ahora en tu casa.</h2>
        <p className="mainText py-4">Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tuhogar.</p>

          <div className='gap-4 flex'>
            <Button url={'Store'} content={'Descubrir orígenes'} className={'text-white bg-[#1f1815] '}  />
            <Button url={'Store'} content={'Comprar café'} className={'text-white bg-[#2a5b45]'}  />
          </div>

        </div>

        <img className="rounded-[20px] shadow-xl mx-[auto]" src={Hero} alt="coffe" />
      </div>
    </section>

  )
}

export default SectionOne