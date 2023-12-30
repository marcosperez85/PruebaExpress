const express = require('express');
const app = express();
const port = 3000; // You can choose any port number

// Define routes and middleware here
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Define Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Example middleware to log requests
app.use((req, res, next) => {
    console.log(`Request received at ${new Date()}`);
    next();
});

// Handle Static Files
app.use(express.static('public'));
