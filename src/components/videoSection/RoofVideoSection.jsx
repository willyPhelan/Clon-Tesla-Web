import teslaVid from '../../assets/video-Tesla-2.mp4'
import './RoofVideoSection.css'

export default function RoofSectionVideo() { 

    return (

        <div className="section-container">

            <video className='video-background-r' autoPlay muted loop>

             <source src={teslaVid} type="video/mp4" />   

                

            </video>

        <div className='overlay-r'>

            
            <h1> Build your own Tesla Solar Roof </h1>  
        

           <div> 

             <button> Order Now </button>

           </div>

           </div>




        </div>
    )
}