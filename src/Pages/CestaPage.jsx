import React, { useContext, useState } from 'react'
import FooterSimple from '../Components/FooterSimple/FooterSimple'
import { UserContext } from '../Context/Context';
import ProductsTotal from '../Components/ProductsTotal/ProductsTotal';
import TotalPrice from '../Components/TotalPrice/TotalPrice';



const CestaPage = () => {
  const { card } = useContext(UserContext);
  const [envio, setEnvio] = useState('0')

  const sumaCantProductos = card.reduce((acc, e) => acc + e.quantity, 0);

  const updateEnvio = (e) => setEnvio(e.target.value)

  return (

    <section className=' h-full pb-8'>
      <section className="mb-12">
        <h2 className="text-center text-[#2a5b45] text-2xl my-5">Cesta (<span>{sumaCantProductos}</span>)</h2>

        <div className="flex justify-between px-12">
          <div className="w-[60%]">
            <div className="prodEnvio">
              <h3>Productos</h3>
              {
                (card.length === 0) ? <h2 className='my-4 p-8 bg-[#f4f4f4]'>NO HAY PRODUCTOS EN LA CESTA</h2>
                  :
                  card.map((el) => {
                    return (
                      <ProductsTotal brand={el.brand} img={el.img_url} price={el.price} id={el._id} quantity={el.quantity} key={el._id} />
                    )
                  })
              }
            </div>

            <div className=" mt-4">
              <h3>Seleccionar envío</h3>
              <div className=" flex justify-between py-4 items-center">
                <div className=" flex">
                  <input onChange={updateEnvio} className="accent-[#2a5b45] mr-2 ml-2 " type="radio" defaultChecked name="demoraEnvio" value={0} />
                  <div className="tipoEnvio">
                    <p>Envío 5-7 días</p>
                    <p>Opción estándar sin seguimiento</p>
                  </div>
                </div>
                <p className="font-bold">GRATIS</p>
              </div>
              <hr />
              <div className=" flex justify-between py-4 items-center">
                <div className=" flex">
                  <input onChange={updateEnvio} className="accent-[#2a5b45] mr-2 ml-2" type="radio" name="demoraEnvio" value={9} />
                  <div>
                    <p>Envío urgente 24h </p>
                    <p className=''>Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
                  </div>
                </div>
                <p className="font-bold">9,00 €</p>
              </div>
            </div>
          </div>



          <TotalPrice valueEnvio={envio} />




        </div>
      </section>

      <FooterSimple />
    </section>
  )
}

export default CestaPage;