export async function fetchReport() {
    const res = await fetch('http://localhost:4000/api/report');
    return res.json();
  }