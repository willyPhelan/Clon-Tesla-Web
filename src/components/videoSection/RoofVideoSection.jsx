import teslaVid from '../../assets/video-Tesla-2.mp4'
import './RoofVideoSection.css'

export default function HomeSectionVideo() { 

    return (

        <div>

            <video className='video-background-r' autoPlay muted loop>

             <source src={teslaVid} type="video/mp4" />       

            </video>

        <div className='overlay-r'>

            <div>

             <h1> Build your own Tesla Solar Roof </h1>

           </div>

           <div> 

             <button> Order Now </button>

           </div>

           </div>




        </div>
    )
}