import { aff, mission, planning, suivie } from "../Components/Message";
import Common from "./Common";

export  const  Affectation =() => {
    
    return (
      <Common title={aff}/>
    );
  };

  export  const  Mission =() => {
    
    return (
      <Common title={mission}/>
    );
  };


  
  export  const  Planning =() => {
    
    return (
      <Common title={planning}/>
    );
  };

  
  export  const  Suivi =() => {
    
    return (
      <Common title={suivie}/>
    );
  };