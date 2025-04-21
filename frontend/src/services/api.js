export async function fetchReport() {
  const res = await fetch('http://localhost:4000/api/report');
  if (!res.ok) throw new Error('Error fetching report');
  return res.json();
}