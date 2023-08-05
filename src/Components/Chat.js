import React, { useState } from 'react'
import config from './Config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import Chatbot from 'react-chatbot-kit'
import { TbMinus } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import 'react-chatbot-kit/build/main.css'
import './chat.css'
export default function Chat() {


    const [isOpen, setIsOpen] = useState(false);

  const handleOpenChatbot = () => {
    setIsOpen(true);
  };

  const handleCloseChatbot = () => {
    setIsOpen(false);
  };



  return (
    <>
    {isOpen ? (
      <div style={{marginLeft:"-2em"}}>
    <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
    headerText={<span style={{marginLeft:'7em'}}>Tracking App <button onClick={handleCloseChatbot} style={{border:'none',marginLeft:'5em',color:'white',backgroundColor:'#9370DB'}}><TbMinus size={18}/></button> </span>}
    placeholderText='Taper votre question ici ...'
  />
  
        </div>
      ) : (
        <button onClick={handleOpenChatbot}  className='btn btn-primary'><BsQuestionCircle/> Aide</button>
      )}
    </>
  )
}
