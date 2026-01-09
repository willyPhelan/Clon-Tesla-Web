import './ImagBack.css'

export default function ImgBack({backgroundImage, header, description}){

    return (

        <div className='image-background' style={{backgroundImage: backgroundImage}}> 

            <div className='overlay'>
            
                <div className='top-section'>

                    <h2>{header}</h2>
                    
                    <p>{description}</p>

                </div>

                <div className='bottom-section'>

                    <button> Button 1 </button>

                    <button> Button 2 </button>


                </div>

            </div>

        </div>
    )
}