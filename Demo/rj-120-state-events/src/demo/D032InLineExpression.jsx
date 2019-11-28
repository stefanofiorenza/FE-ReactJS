import React from 'react';

export default function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {/*  
          1) condition && expression:
          
                true && expression always evaluates to expression, 
                and 
                false && expression always evaluates to false. */}

          {/*
            unreadMessages.length > 0 &&
            <h2>
              You have {unreadMessages.length} unread messages.
            </h2>
          */}


            {/* 2) ternary operator */}
            <h2>
              You have {(unreadMessages.length > 0) ? unreadMessages.length :' No'} unread messages.
            </h2>


    </div>
  );
}