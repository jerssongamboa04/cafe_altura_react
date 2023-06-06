import { useState } from 'react';
import Icon from '../../Assets/Icon.png'



const Faq = ({title, answer}) => {

    const [hide, setHide] = useState(true);

    function handleArrow(e) {
        setHide(prev => !prev)
        e.target.classList.toggle("rotate-180")
    }

    return (
        <div className="w-[65%] my-[0.7rem] rounded-[10px] bg-white text-black p-6">
            <div className="flex justify-between items-center">
                <h3 className='text-[18px] font-semibold'>{title}</h3>
                <img className='transition ease-in-out delay-250' onClick={handleArrow} src={Icon} alt='flechaArriba' />
            </div>
            <hr className= {(hide) ? "my-[1rem] hidden" : "my-[1rem]"} />
            <div>
                <p 
                className={(hide) ? "text-left hidden" : "text-left"}
                >{answer}</p>
            </div>
        </div>
    )
}

export default Faq