import React from 'react'
import { Link } from 'react-router-dom'
import phoneblanco from '../../Assets/phoneblanco.png'
import Mail from '../../Assets/Mail.png'



const SectionSix = () => {
    return (
        <section id="form" className="flex bg-[#e3ded7] justify-between">
            <div className="my-auto mx-[2.5rem] text-[#6b7280]">
                <h3 className='text-[#111827] font-semibold'>Entra en contacto con nosotros</h3>
                <p className='my-4'>
                    Si tienes dudas, ponte en contacto con nosotros a través del
                    formulario y te responderemos lo antes posible.
                </p>
                <p className='my-4'>
                    También puedes ponerte en contacto con nostros en nuestra dirección o
                    a través del teléfono de la tienda.
                </p>
                <p className='my-4'>742 Evergreen Terrace <br />Springfield, OR 12345</p>
                <div className="flex items-center">
                    <img className='mr-4' src={phoneblanco} alt="telefono" />
                    <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center my-4">
                    <img className='mr-4' src={Mail} alt="correo" />
                    <p>support@example.com</p>
                </div>
                <div className="flex items-center gap-1">
                    <p>¿Buscas un trabajo?</p>
                    <Link className='text-black underline font-semibold' to="/"> Ver nuestras ofertas.</Link>
                </div>
            </div>

            <form className='bg-white flex flex-col mr-12 w-[588px] pt-8 px-8 py-4'>
                <div className="flex flex-col my-[0.8rem] mx-[0.4rem]">
                    <label className='text-[#374151]' htmlFor="">Nombre completo</label>
                    <input className='w-[100%] rounded-md py-2 px-6 border-[1px] border-solid border-[#d1d5db] hover:border-[#9b9ea3] focus:border-[#3f8f6b]' type="text" />
                </div>
                <div className="flex flex-col my-[0.8rem] mx-[0.4rem]">
                    <label className='text-[#374151]' htmlFor="">Email</label>
                    <input className='w-[100%] rounded-md py-2 px-6 border-solid border-[1px] border-[#d1d5db] hover:border-[#9b9ea3] focus:border-[#3f8f6b]' type="email" name="" id="" />
                </div>
                <div className="flex flex-col my-[0.8rem] mx-[0.4rem]">
                    <label className='text-[#374151]' htmlFor="">Teléfono</label>
                    <div className="flex flex-no-wrap">
                        <select className='rounded-md py-3 px-4 border-[1px] border-solid border-[#d1d5db] hover:border-[#9b9ea3] focus:border-[#3f8f6b]' name="" id="">
                            <option value="US">US</option>
                            <option value="SP">SP</option>
                            <option value="ARG">ARG</option>
                        </select>
                        <input className='w-[100%] rounded-md py-2 px-6 border-solid border-[1px] border-[#d1d5db] hover:border-[#9b9ea3] focus:border-[#3f8f6b]' type="tel" placeholder="+1 (555) 987-6543" />
                    </div>
                </div>
                <textarea className='my-[0.8rem] mx-[0.4rem] rounded-md py-3 px-3 border-solid border-[1px] border-[#d1d5db] hover:border-[#9b9ea3] focus:border-[#3f8f6b]' name="" cols="30" rows="5" placeholder="¿En qué podemos ayudarte?"></textarea>
                <div className="flex text-[#374151] gap-3 text-sm">
                    <input type="checkbox" />
                    <p>Acepto la <Link className='underline text-black font-semibold' to="/">Política de Privacidad</Link> y los
                        <Link className='underline text-black font-semibold' to="/">Términos y condiciones</Link>.
                    </p>
                </div>
                <div>
                    <button className="my-[0.8rem] mx-[0.4rem text-white mb-2 bg-[#3f8f6b]" type="submit">Enviar</button>
                </div>
            </form>
        </section>)
}

export default SectionSix