import './ImagBack.css'

export default function ImgBack({backgroundImage, header, description, showDemoDrive}){

    return (

        <div className='image-background' style={{backgroundImage: `url(${backgroundImage})`}}> 

            <div className='overlay'>
            
                <div className='top-section'>

                    <h2>{header}</h2>
                    
                    <p>{description}</p>

                </div>

                <div className='bottom-section'>

                    <button> Order Now </button>
                   
                    {showDemoDrive && <button> Demo Drive </button>}


                </div>

            </div>

        </div>
    )
}