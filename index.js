const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const trainRoutes = require('./routes/trainRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const passengerRoutes=require('./routes/passengerRoutes');
const ticketRoutes=require('./routes/ticketRoutes');

const app = express();
const port = 3000;

// Configure CORS to allow requests from your frontend origin
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', userRoutes);
app.use('/', trainRoutes);
app.use('/',scheduleRoutes);
app.use('/',passengerRoutes);
app.use('/',ticketRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
