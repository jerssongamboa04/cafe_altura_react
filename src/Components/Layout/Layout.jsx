import React from 'react';
import Button from '../Button/Button';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className='flex gap-8'>
          <li>
          <Button className="p-2 hover:rounded-xl hover:bg-[#515051] hover:px-2" url={'Store'} content={'Tienda'}/>
          </li>
          <li>
          <Button className="p-2 hover:rounded-xl hover:bg-[#515051] hover:px-2" url={'/'} content={'Suscripcion'} />
          </li>
          <li>
          <Button className="p-2 hover:rounded-xl hover:bg-[#515051] hover:px-2" url={'/'} content={'Para empresas'} />
          </li>

          <li>
          <Button className="p-2 hover:rounded-xl hover:bg-[#515051] hover:px-2" url={'/'} content={'Sobre nosotros'} />
          </li>
          <li>
          <Button className="p-2 hover:rounded-xl hover:bg-[#515051] hover:px-2" url={'/'} content={'Contacto'} />
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
