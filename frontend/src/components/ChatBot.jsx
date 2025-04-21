import { useState } from 'react';
import { askAssistant } from '../services/api';
export default function ChatBot() {
  const [msg, setMsg] = useState('');
  const [reply, setReply] = useState('');
  const send = async () => {
    const res = await askAssistant(msg);
    setReply(res.reply);
  };
  return (
    <div>
      <input value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={send}>Enviar</button>
      <p>{reply}</p>
    </div>
  );
}