const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
// Import other route modules similarly when created

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', userRoutes);
// Add other routes similarly, e.g., app.use('/api', trainRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
