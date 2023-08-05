// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

import BotAvatar from '../BotAvatar/BotAvatar.js';
import GeneralOptions from '../widgets/Overview.js';

import Ressource from '../widgets/Ressource.js';

import Crud from '../widgets/CRUD/Options.js';
import { Ajout, Modifier, Supprimer } from '../widgets/CRUD/Crud.js';
import { Affectation, Mission, Planning, Suivi } from '../widgets/OptionSelect.js';

const botName = 'TrackBot';

const Config = {
  initialMessages: [createChatBotMessage(`Bonjour ! Je suis ${botName}`),
  createChatBotMessage(`Bienvenu chez TrackingApp ! Comment je peux vous aider ?`, {withAvatar: false,delay: 900, widget: "overview" })
],
  botName: botName,
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />
},
  customStyles: {
    botMessageBox: {
      backgroundColor: '#F8F8FF',
      
    },
    chatButton: {
      backgroundColor: '#9370DB',
    },
   
   
  },

  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <GeneralOptions {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "ressource",
      widgetFunc: (props) => <Ressource />
    },
    {
      widgetName: "mission",
      widgetFunc: (props) => <Mission />
    },
    {
      widgetName: "affectation",
      widgetFunc: (props) => <Affectation />
    },
    {
      widgetName: "suivi",
      widgetFunc: (props) => <Suivi />
    },
    {
      widgetName: "planning",
      widgetFunc: (props) => <Planning />
    },
    {
      widgetName: "gestion",
      widgetFunc: (props) => <Crud {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "ajout",
      widgetFunc: (props) => <Ajout />
    },
    {
      widgetName: "modifier",
      widgetFunc: (props) => <Modifier />
    },
    {
      widgetName: "supprimer",
      widgetFunc: (props) => <Supprimer />
    },
  ]
};

export default Config;