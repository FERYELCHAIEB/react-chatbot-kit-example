import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Gérer Ressource",
      handler: props.actionProvider.handleRessource,
      id: 1
    },
    {
      name: "Planning Agent",
      handler: props.actionProvider.handlePlanning,
      id: 2
    },

    {
      name: "Gérer mission",
      handler: props.actionProvider.handleMission,
      id: 3
    },
    {
      name: "Gérer affectation",
      handler: props.actionProvider.handleAffectation,
      id: 4
    },
    {
      name: "Suivre affectation",
      handler: props.actionProvider.handleSuivie,
      id: 5
    },
    
  ];
  return <Options options={options} title="Voici les suggestions : " {...props} />;
};

export default GeneralOptions;