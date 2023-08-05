// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('salut')||message.includes('bonjour')) {
      actions.handleHello();
    }

    else if (message.includes('options')||message.includes('suggestions')||message.includes('menu')) {
      actions.handleOptions();
    }
    

   else {
    actions.handleNotFound();
   }
  };
  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;