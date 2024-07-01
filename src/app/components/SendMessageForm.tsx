import React, { useState } from 'react';
import styles from '../styles/SendMessageForm.module.css';

interface SendMessageFormProps {
  closeForm: () => void;  
}

const SendMessageForm: React.FC<SendMessageFormProps> = ({ closeForm }) => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Enviar para:', recipient, 'Mensagem:', message);
    setRecipient('');
    setMessage('');
    closeForm();
  };

  const handleCancel = () => {
    setRecipient('');
    setMessage('');
    closeForm();
  };

  return (
    <>
      <div className={styles.overlay} onClick={closeForm}></div>  {}
      <div className={styles.container}>
        <h2>Criar nova mensagem</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Destinatário:
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Digite o destinatário..."
              className={styles.input}
            />
          </label>
          <label>
            Digite sua mensagem...
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
            />
          </label>
          <div className={styles.buttons}>
            <button type="submit" className={styles.confirm}>Confirmar</button>
            <button type="button" onClick={handleCancel} className={styles.cancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SendMessageForm;
