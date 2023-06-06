import React, { useEffect, useContext } from 'react'
import { fetchData } from '../../Utilies/Utilies';
import direccion from '../../Assets/direccion.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/Context';
import CardCoffe from '../CardCoffe/CardCoffe';


const SectionThree = () => {
  const {products, setProducts} = useContext(UserContext);

  useEffect(() => {
    fetchData(`https://cafe-de-altura.vercel.app/api/products`)
      .then(async (res) => {
        const data = await res.products;
        if (data) {
          
          setProducts(data);
        }

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [setProducts])


  return (
    <section>

      <h2 className="text-center my-12 [text-shadow:_2px_4px_3px_rgba(0,0,0,0.3)] text-[2rem] text-[#2a5b45]">Novedades</h2>
      <div className="flex my-12 justify-around flex-wrap">
                {products &&
                    products.slice(0, 4).map((product, i) => {
                        return (
                            <CardCoffe _id={product._id} available={product.available} brand={product.brand} img_url={product.img_url} price={product.price} key={i} />
                        )
                    })
                }
            </div>


      <div className="flex justify-center items-center my-12">

        <Link className='font-semibold text-black underline text-sm mr-3 [text-shadow:_2px_4px_3px_rgba(0,0,0,0.3)]' to={'Store'}>Ver todos</Link>
        <img src={direccion} alt="flechaRight" />
      </div>


    </section>)
}

export default SectionThree