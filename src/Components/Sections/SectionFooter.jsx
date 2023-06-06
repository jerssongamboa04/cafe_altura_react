import React from 'react'
import Button from '../Button/Button';
import phone from '../../Assets/phone.png'
import emailfooter from '../../Assets/emailfooter.png'


const SectionFooter = () => {
    return (
        <footer className='bg-[#1f1815] text-[#ffffff] px-[2.5rem] py-8'>
            <div className="flex items-center mb-6">
                <h2 className='text-[1.7rem] mr-2'>cafedealtura.com</h2>
                <img src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/cafecito.png?alt=media&token=baa91583-ab37-4ea3-b4d9-2710fd8221b7" alt="cafeIcon" />
            </div>

            <div className="flex">
                <div className="w-[50%]">
                    <h3 className='text-[1.3rem]'>Te ayudamos en</h3>
                    <div className='flex items-center bg-[#515051] py-6 px-12 rounded my-4 w-[fit-content]'>
                        <img src={phone} alt="" />
                        <p className='ml-4'>+34 919 49 05 18</p>
                    </div>
                    <div className='flex items-center bg-[#515051] py-6 px-12 rounded my-4 w-[fit-content]'>
                        <img src={emailfooter} alt="" />
                        <p className='ml-4'>hola@cafedealtura.com</p>
                    </div>
                </div>
                <div className="w-[50%] flex">
                    <nav className="flex flex-col no-underline text-[#ffffff] w-[50%] list-none">
                        <Button url={'Store'} content={'Tienda'} />
                        <Button url={'/'} content={'Suscripción'} />
                        <Button url={"/"} content={'Para empresas'} />
                        <Button url={"/"} content={'Sobre Nosotros'} />
                        <Button url={"/"} content={'Contacto'} />
                    </nav>
                    <nav className="flex flex-col no-underline text-[#ffffff] list-none">
                        <Button url={"/"} content={'Política de privacidad'} />
                        <Button url={"/"} content={'Política de cookies'} />
                        <Button url={"/"} content={'Términos y condiciones'} />
                    </nav>
                    <div></div>
                </div>
            </div>
        </footer>)
}

export default SectionFooter