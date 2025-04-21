const express = require('express');
const reportRoutes = require('./routes/report');
const app = express();
app.use(express.json());

app.use('/api', reportRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend Datos running on port ${PORT}`));