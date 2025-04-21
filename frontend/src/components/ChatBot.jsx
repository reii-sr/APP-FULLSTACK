import { useState } from 'react';
import { askAssistant } from '../services/api';

export default function ChatBot() {
  const [msg, setMsg] = useState('');
  const [reply, setReply] = useState('');

  const send = async () => {
    try {
      const res = await askAssistant(msg);
      setReply(res.reply);
    } catch (e) {
      console.error(e);
      setReply('Error al contactar al asistente');
    }
  };

  return (
    <div>
      <input
        value={msg}
        onChange={e => setMsg(e.target.value)}
        placeholder="Escribe tu pregunta..."
      />
      <button onClick={send}>Enviar</button>
      <p>{reply}</p>
    </div>
  );
}