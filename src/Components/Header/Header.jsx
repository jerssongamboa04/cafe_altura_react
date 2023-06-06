import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import cup from '../../Assets/cup.png';
import Layout from '../Layout/Layout';
import phone from '../../Assets/phone.png'
import bag from '../../Assets/bag.png'
import { UserContext } from '../../Context/Context';


const Header = () => {

    const { card } = useContext(UserContext);

    const sumaCantProductos = (card) => {
        let cantProducts = card.reduce((acc, e) => {
            acc += e.quantity;
            return acc;
        }, 0);
        return cantProducts;
    };

    return (
        <header className=' justify-between flex items-center bg-[#2B2A2B] text-white text-sm px-10 py-3'>
            <Link to='/'>
                <div className="flex items-center gap-2 m-15">
                    <h1 className="text-[23.46px] ">cafedealtura.com</h1>
                    <div>
                        <img src={cup} className="w-[20.29px]" alt="cup" />
                    </div>
                </div>
            </Link>
            <Layout />
            <div className='flex gap-6'>
                <div className="flex items-center gap-3">
                    <div>
                        <img src={phone} alt="esto es un phone" />
                    </div>
                    <p >+34 919 49 05 18</p>
                </div>

                <Button className='bg-[#515051]' url={'/'} content={'Iniciar Sesion'} />
            </div>

            <div>
                <Link className="flex items-center" to="Cesta">
                    <img className="p-3" src={bag} alt="esto es una imagen" />
                    <p className='text-center flex items-center justify-center w-6 h-6 rounded-full bg-[#515051]'>
                        <span>{sumaCantProductos(card)}</span>
                    </p>
                </Link>
            </div>
        </header>
    )
}

export default Header