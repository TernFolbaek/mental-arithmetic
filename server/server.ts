const express = require('express');

const app = express();
const port = process.env.PORT || 5001;

// Define your routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
