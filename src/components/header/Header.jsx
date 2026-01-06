import { useNavigate } from "react-router-dom";
import './Header.css' ;
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react" ;
import Backdrop from "../backdrop/Backdrop";

export const navElements = [

    { label: 'TESLA', route: '/', style: {marginRight: 'auto'}}, 
    { label: 'Model S', route: '/model_s' },
    { label: 'Model 3', route: '/model_3' },
    { label: 'Model X', route: '/model_x' }, 
    { label: 'Model Y', route: '/model_y' },
    { label: 'CyberTruck', route: '/cybertruck' },
    { label: 'Solar Roof', route: '/solar_roof' },
    { label: 'Solar Panels', route: '/solar_panels' },
    { label: 'Powerwall', route: '/powerwall' },
    { label: 'Shop', route: '/shop', style: { marginLeft: 'auto' } },
    { label: 'Account', route: '/account'},
    { label: 'Menu', route: null },

] ; 

export default function Header() {

    const navigate = useNavigate() ;

    const [showSidebar, setShowSidebar] = useState(false) ;

    return (

        <>

        { showSidebar && (

            <>

            <Backdrop onClick={ () => setShowSidebar(false) } />
            <Sidebar setShowSidebar={setShowSidebar}/>

            </>
         )}

        

        <nav> 

            <ul className="headerList">
                
                { navElements.map( ( {label, route, style={} } ) => (

                    <li 
                    
                        style={style} 
                        key={label} 
                        onClick={ () => { if (label === 'Menu') { setShowSidebar(true) ; } else { navigate(route) ; } } } > {label} </li>
                    
                ) ) }
                
                 </ul>

        </nav> 
        
        </> ) } ;