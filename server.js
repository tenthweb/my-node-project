
// Import dependencies
const express = require('express');
const fetch = require('node-fetch');
const axios = require('axios');// Or use axios if preferred
const app = express();

// Define a route to fetch bus data
app.get('/api/bus-data', async (req, res) => {
    try {
        const response = await axios.get(
            'https://api.nationaltransport.ie/gtfsr/v2/gtfsr?format=json',
            { headers: { 'x-api-key': '380d0eb8a4664252a442a5b4ea210193' } }
        );
        res.json(response.data);
    } catch (error) {
        console.error('API Fetch Error:', error.message);
        console.error('Full Error:', error.response?.data || error);

        res.status(500).json({
            error: 'Failed to fetch bus data',
            details: error.message
        });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');
const app = express();

// Set the port to the value provided by Heroku, or 3000 for local development
const PORT = process.env.PORT || 3000;

// Your routes and middleware would go here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



