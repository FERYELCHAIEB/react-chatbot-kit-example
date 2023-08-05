import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Bienvenu sur Tracking App ! ');
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNotFound = () => {
    const botMessage = createChatBotMessage('Merci pour votre réponse, Vous pouvez poser une autre question.  ');
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }; 



  const  handleOptions = (options) => {
    const botMessage = createChatBotMessage(
      "Comment je peux vous aider",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    
    }

    const  handleCrud = (menu) => {
      const botMessage = createChatBotMessage(
        "",
        {
          widget: "gestion",
          loading: true,
          terminateLoading: true,
          withAvatar: false,
          ...menu
        }
      );
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
      
      }

    


    const handleRessource = () => {
      const botMessage = createChatBotMessage(
        " Voilà la réponse à votre question.",
        {
          widget: "ressource",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    };
  
    const handleAffectation = () => {
      const botMessage = createChatBotMessage(
        "Voilà la réponse à votre question.",
        {
          widget: "affectation",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    handleCrud()
    };
  
    const handleMission = () => {
      const botMessage = createChatBotMessage(
        "Voilà la réponse à votre question.",
        {
          widget: "mission",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    handleCrud()
    };

    const handleSuivie = () => {
      const botMessage = createChatBotMessage(
        "Voilà la réponse à votre question.",
        {
          widget: "suivi",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    };
    const handlePlanning = () => {
      const botMessage = createChatBotMessage(
        "Voilà la réponse à votre question.",
        {
          widget: "planning",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    };

    const handleAjout = () => {
      const botMessage = createChatBotMessage(
        "Voilà la réponse à votre question.",
        {
          widget: "ajout",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    };
    const handleSupp = () => {
      const botMessage = createChatBotMessage(
        "Voilà la réponse à votre question.",
        {
          widget: "supprimer",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    };
    const handleModif = () => {
      const botMessage = createChatBotMessage(
        "Voilà la réponse à votre question.",
        {
          widget: "modifier",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleAffectation,
            handleRessource,
            handleOptions,
            handleMission,
            handleSuivie,
            handlePlanning,handleAjout,handleModif,handleSupp,handleCrud,handleNotFound
           
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;