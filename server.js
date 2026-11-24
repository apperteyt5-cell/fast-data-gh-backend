require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const BASE_URL = 'https://elitedatagh.com/api/v1';

function supplierHeaders() {
  const token = process.env.ELITEDATAGH_API_TOKEN;
  if (!token) throw new Error('Supplier API token is not configured on the server.');
  return { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
}

app.get('/health', (_req, res) => res.json({ ok: true, service: 'FAST DATA GH backend' }));

app.get('/api/supplier/balance', async (_req, res) => {
  try {
    const response = await fetch(`${BASE_URL}/balance`, { method: 'GET', headers: supplierHeaders() });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get('/api/bundles', async (_req, res) => {
  try {
    const response = await fetch(`${BASE_URL}/bundles`, {
      method: 'POST', headers: supplierHeaders(), body: JSON.stringify({})
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Intentionally disabled: enable purchases only after server-side payment verification,
// persistent order records, duplicate-request protection, and supplier status handling exist.
app.post('/api/orders', (_req, res) => {
  res.status(501).json({
    success: false,
    message: 'Purchases are not enabled yet. Payment verification and order tracking must be configured first.'
  });
});

app.listen(PORT, () => console.log(`FAST DATA GH backend listening on port ${PORT}`));
