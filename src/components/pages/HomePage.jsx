import VideoSection from "../videoSection/VideoSection" ;
import ImagBack from "../imageBack/ImagBack";
import modelS from "../../assets/Tesla-Pic-1.jpg" ;

export default function HomePage() {

    return (

       <>
        
        <VideoSection/>

        <ImagBack header="Model S" descriptio="View inventory" backgroundImage={modelS} />
       
      </>
           
    ) } ; 