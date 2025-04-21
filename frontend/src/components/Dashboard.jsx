import { useEffect, useState } from 'react';
import { fetchReport } from '../services/api';

export default function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => { fetchReport().then(setData) }, []);
  return (
    <table>
      <thead><tr><th>Fecha</th><th>Total</th></tr></thead>
      <tbody>
        {data.map(r => <tr key={r.fecha}><td>{r.fecha}</td><td>{r.total}</td></tr>)}
      </tbody>
    </table>
  );
}