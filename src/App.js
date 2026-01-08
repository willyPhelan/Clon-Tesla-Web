import { Children, useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Backdrop from "./components/backdrop/Backdrop";

function App({children}) {

    const [showSidebar, setShowSidebar] = useState(false) ;

  return (

   <>

      <Header setShowSidebar={setShowSidebar}/>
    
     { showSidebar && (
   
               <>
   
               <Backdrop onClick={ () => setShowSidebar(false) } />

               <Sidebar setShowSidebar={setShowSidebar}/>
   
               </>
            )}


   </>
  
) ;

}

export default App ;
