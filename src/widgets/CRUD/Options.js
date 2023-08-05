import Options from "./CrudOptions";

const Crud = (props) => {
  const menu = [
    {
      name: "Ajouter",
      handler: props.actionProvider.handleAjout,
      id: 1
    },
    {
      name: "Modifier",
      handler: props.actionProvider.handleModif,
      id: 2
    },

    {
      name: "Supprimer",
      handler: props.actionProvider.handleSupp,
      id: 3
    },
   
    
  ];
  return <Options options={menu} title="Voici les options de gestion : " {...props} />;
};

export default Crud;