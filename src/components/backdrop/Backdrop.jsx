import { useEffect } from "react";
import "./Backdrop.css" ;

function Backdrop({onClick}) {

        useEffect(() => {

            const content = document.querySelector('main.content') ; 
            
            content.classList.add('blur-content') ; 

            return () => {

                content.classList.remove('blur-content') ; 
            }
        }, [])

    return (

      <div className="backdrop" onClick={onClick}> </div>    )

    
    }

     export default Backdrop ;