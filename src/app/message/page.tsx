"use client"
import React, { useState, useEffect } from 'react';
import feather from 'feather-icons';
import styles from '../styles/MessageBoard.module.css';
import SendMessageForm from './SendMessageForm'; 
import { ContainerImagem, ContainerNav, GlobalStyle } from '../dashboard/style';
import MenuNav from '@/Components/Menu/Menu';

interface Message {
  id: number;
  content: string;
  timestamp: string;
}

interface Props {
  userType: 'student' | 'professor';
}

const MessageBoard: React.FC<Props> = ({ userType }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      timestamp: "21/05/2024 10:27"
    },
    {
      id: 2,
      content: "Fusce malesuada, nisi at consectetur dictum, sem elit ultricies nibh, nec faucibus neque lorem sed turpis. Integer efficitur ipsum sit amet mauris volutpat, at venenatis sem efficitur. Mauris quis ex augue.",
      timestamp: "02/05/2024 17:02"
    }
  ]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    feather.replace(); 
  }, []);

  const handleNewMessage = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
    <GlobalStyle />
      <ContainerNav>
        <MenuNav></MenuNav>
      </ContainerNav>
      

      <div className={styles.container}>
        {messages.map(message => (
          <div key={message.id} className={styles.message}>
            <i className="icon" dangerouslySetInnerHTML={{ __html: feather.icons['user'].toSvg() }}></i>
            <div className={styles.content}>
              <div className={styles.timestamp}>{message.timestamp}</div>
              <p className={styles.text}>{message.content}</p>
            </div>
          </div>
        ))}
        <button onClick={handleNewMessage} className={styles.newMessageButton}>Nova mensagem</button>
        {showForm && <SendMessageForm closeForm={closeForm} />}
      </div>
      
    </>
  );
};

export default MessageBoard;
