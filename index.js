const express = require('express');
const app = express();
const port = 3000; // You can choose any port number

// Example middleware to log requests
app.use((req, res, next) => {
    console.log(`Request received at ${new Date()}`);
    next();
});

// Define Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Handle Static Files
app.use(express.static('public'));


// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  
// Define routes and middleware here
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});