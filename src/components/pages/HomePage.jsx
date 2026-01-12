import VideoSection from "../videoSection/VideoSection" ;
import RoofVideoSection from "../videoSection/RoofVideoSection" ;
import ImagBack from "../imageBack/ImagBack";
import modelS from "../../assets/Tesla-Pic-1-S.jpg" ;
import modelX from "../../assets/Tesla-Pic-3-X.jpg" ;
import modelY from "../../assets/Tesla-Pic-5-Y.jpg" ;
import model3 from "../../assets/Tesla-Pic-6-3.jpg" ;
import cyberT from "../../assets/Tesla-Pic-4.jpg" ;
import teslaSp  from "../../assets/Tesla-Pic-7-SP.jpg" ;


export default function HomePage() {

    return (

       <>

        <div className="container">


          <section className="section">
        
           <VideoSection/>

          </section>


          <section className="section">

            <ImagBack header="Model S" description="View inventory" backgroundImage={modelS} showDemoDrive />

           </section>


        <section className="section">

         <ImagBack header="Model X" description="View inventory" backgroundImage={modelX} showDemoDrive />

        </section>


        <section className="section">

         <ImagBack header="Model Y" description="View inventory" backgroundImage={modelY} showDemoDrive />

        </section>

         <section className="section">

        <ImagBack header="Model 3" description="View inventory" backgroundImage={model3} showDemoDrive />

        </section>

         <section className="section">

          <ImagBack header="Cybertruck" description="View inventory" backgroundImage={cyberT} showDemoDrive />

        </section>

          <section className="section">

          <ImagBack header="Solar Panels" description="View inventory" backgroundImage={teslaSp} />

          </section>

        <section className="section">

          <RoofVideoSection/>

        </section>

        </div>
       
      </>
           
    ) } ; 