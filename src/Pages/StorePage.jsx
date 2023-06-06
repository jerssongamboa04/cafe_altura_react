import React, { useContext } from 'react';
import FooterSimple from '../Components/FooterSimple/FooterSimple';
import SectionTwo from '../Components/Sections/SectionTwo';
import { UserContext } from '../Context/Context';
import CardCoffe from '../Components/CardCoffe/CardCoffe';
import SectionFooter from '../Components/Sections/SectionFooter'

const StorePage = () => {

  const { products } = useContext(UserContext);

  return (

    <section>
      <h2 className="text-center my-12 [text-shadow:_2px_4px_3px_rgba(0,0,0,0.3)] text-[2rem] text-[#2a5b45]">Últimos origenes</h2>

      <div className="flex my-12 justify-around flex-wrap">
        {products &&
          products.map((product, i) => {
            return (
              <CardCoffe _id={product._id} available={product.available} brand={product.brand} img_url={product.img_url} price={product.price} key={i} />
            )
          })
        }
      </div>
      <SectionTwo />
      <SectionFooter />
      <FooterSimple />
    </section>

  )
}

export default StorePage;