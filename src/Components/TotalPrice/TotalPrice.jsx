import React, { useContext } from 'react'
import Button from '../Button/Button'
import { UserContext } from '../../Context/Context';

const TotalPrice = ({valueEnvio}) => {

    const { card } = useContext(UserContext);


    const precioTotalProductos = (card) => {
        let precioTotalProductos = card.reduce((acc, e) => {
            acc += e.quantity * e.price;
            return acc;
        }, 0);
        return precioTotalProductos;
    };

    return (

        <div className="bg-[#f7f5f3] p-6 h-[fit-content]">
            <h3 className="negritas">Total del carrito</h3>
            <hr className='my-2' />
            <div>
                <div className="totCestaPrecios flex justify-between">
                    <p className='mb-2'>SUBTOTAL</p>
                    <p className="totCestaSubtotal negritas mb-2">{precioTotalProductos(card)} ,00 €</p>
                </div>
                <div className="totCestaPrecios flex justify-between">
                    <p className='mb-2'>ENVÍO</p>
                    <p className="envioPrice negritas mb-2">{valueEnvio === '0' ? 'GRATIS' : valueEnvio + ' ,00 €'}</p>
                </div>
            </div>
            <hr />
            <div>
                <div className="totCestaPrecios flex justify-between">
                    <p className="negritas mb-2">TOTAL</p>
                    <p className="totCestaTotal negritas mb-2">{precioTotalProductos(card) + parseInt(valueEnvio)} ,00 €</p>
                </div>
                <div className="totCestaPrecios flex justify-between">
                    <p className='mb-2'></p>
                    <p className="ivaDetail text-xs text-[#515051] mb-2">Incluye <span className="ivaTotal">{((precioTotalProductos(card) + parseInt(valueEnvio)) * 0.04).toFixed(2)} €</span> de IVA</p>
                </div>
            </div>
            <div className="totalCestaButtons mt-4">
                <button  className=" hover:scale-105 transition ease-in-out delay-250 bg-[#2a5b45] text-white">Ir a checkout</button>
                <Button className='text-[#2a5b45] font-semibold' url={'/Store'} bgColor={`bg-[#2a5b45]`}  content={'Seguir comprando'} />
            </div>
        </div>

    )
}

export default TotalPrice;