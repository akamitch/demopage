const express = require('express');
const app = express();
const PORT = 9000;

// Middleware to extract the real visitor IP
app.use((req, res, next) => {
    // Get the real IP address from the request
    const visitorIP = req.headers['x-real-ip'] || req.connection.remoteAddress;
    const domainName = req.headers.host; // Get the domain name from the request

    // Send the response
    res.send(`
        <h1>Visitor Information</h1>
        <p><strong>Domain Name:</strong> ${domainName}</p>
        <p><strong>Visitor IP:</strong> ${visitorIP}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
