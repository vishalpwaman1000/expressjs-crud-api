const express = require('express');
const noteRoutes = require('./routes/note.routes');
const { swaggerUi, specs } = require('./docs/swagger');

const app = express();

app.use(express.json());

app.use('/api/notes', noteRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Basic health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
