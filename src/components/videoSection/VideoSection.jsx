import './VideoSection.css'
import teslaVid from '../../assets/video-Tesla-1.mp4'

export default function HomeSectionVideo() { 

    return (

        <div  className='video-background'>

            <video autoPlay muted loop>

             <source src={teslaVid} type="video/mp4" />       

            </video>

        <div className='overlay'>

            <div className='top-section'>

             <h1> Top Section </h1>

           </div>

           <div className='bottom-section'> 

             <h1> Bottom Section </h1>

           </div>

           </div>




        </div>
    )
}