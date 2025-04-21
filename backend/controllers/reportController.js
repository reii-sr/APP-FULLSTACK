const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'analytics'
});

async function getReport(req, res) {
  try {
    const [rows] = await pool.query(
      'SELECT fecha, SUM(valor) AS total FROM ventas GROUP BY fecha'
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener reporte' });
  }
}

module.exports = { getReport };