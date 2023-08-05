import Common from "./Common";
import Options from "./Options";
import GeneralOptions from "./Overview";

const Ressource = (props) => {
    
  
  
    return (<>
     <Common title="Pour gérer les ressources il faut aller à la rubrique ressource et choisir Agent ou véhicule pour traiter le gestion"/>
      <div className="options-container">
        
            <div className="option-item">
             Agent
             
            </div>
            <div className="option-item">
             Transport
             
            </div>
         
      </div>
      </>
    );
  };
  
  export default Ressource;