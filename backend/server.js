const express = require('express');
const assistantRoutes = require('./routes/assistant');
const app = express();
app.use(express.json());
app.use('/api', assistantRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Asistente backend running on ${PORT}`));