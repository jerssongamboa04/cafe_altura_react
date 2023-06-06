import React, { useContext } from 'react';
import { UserContext } from '../../Context/Context';

const ProductsTotal = ({ brand, price, img, id, quantity }) => {
  
  const { setCard } = useContext(UserContext);

  function sumar() {
    setCard(prev => {
      const index = prev.findIndex(e => e._id === id);
      if (index !== -1) {
        prev[index].quantity++;
      }
      return [...prev];
    });
  }

  function restar() {
    setCard(prev => {
      const index = prev.findIndex(e => e._id === id);
      if (index !== -1) {
        prev[index].quantity--;
        if (prev[index].quantity === 0) {
          prev.splice(index, 1);
        }
      }
      return [...prev];
    });
  }

  return (
    <div> 
    <div className="resumenCesta flex items-center justify-between py-4">
      <div className="flex">
        <div id={id} className="flex items-center">
          <p onClick={restar} className="btn py-2 px-3 font-bold text-2xl cursor-pointer">-</p>
          <p className="rounded-[50%] bg-[#0000000e] text-xs py-2 px-3">{quantity}</p>
          <p onClick={sumar} className="btn py-2 px-3 font-bold text-2xl cursor-pointer">+</p>
        </div>
        <div className="productDetail flex">
          <img className="w-[55px] mr-4" src={img} alt={brand} />
          <div>
            <p className="bagsNames font-bold text-base">{brand}</p>
            <p>Paquete de café, 250 gr</p>
          </div>
        </div>
      </div>
      <p className="priceResumen negritas"><span className="priceResumenSpan font-bold">{quantity * price},00 €</span></p>
    </div>
    <hr />
    </div>


  );
};

export default ProductsTotal;
