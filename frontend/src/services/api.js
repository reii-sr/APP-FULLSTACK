export async function askAssistant(prompt) {
    const res = await fetch('http://localhost:5000/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    if (!res.ok) throw new Error('Error en asistente API');
    return res.json();
  }