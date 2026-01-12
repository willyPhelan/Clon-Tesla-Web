import './VideoSection.css'
import teslaVid from '../../assets/video-Tesla-1.mp4'

export default function HomeSectionVideo() { 

    return (

        <div className="section-container">

            <video className='video-background' autoPlay muted loop>

             <source src={teslaVid} type="video/mp4" />       

            </video>

        <div className='overlay'>

            <div>

             <h1> Experience Tesla </h1>

             <h5> Schedule your test drive today </h5>

           </div>

           <div> 

             <button> Demo Drive </button>

           </div>

           </div>




        </div>
    )
}