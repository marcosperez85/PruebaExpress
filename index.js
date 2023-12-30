const express = require('express');
const app = express();
const port = 3000; // You can choose any port number

// Define routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
