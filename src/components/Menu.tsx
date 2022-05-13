import { useState } from 'react';

export function Menu(){
    const[active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
    }
    return(
        <div className="menuM">
            <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
                <div className='hamburguer hambueguerIcon'></div>                        
            </div>

            <div className={active ? "menu menuOpen" : "menu menuClose"}>
                <div className='list'>
                    <ul className='listItems'>
                        <li>Principal</li>
                        <li>Produtos</li>
                        <li>Contato</li>
                        <li>Sobre</li>                    
                    </ul>
                </div>
            </div>
        </div>    
    )
}
