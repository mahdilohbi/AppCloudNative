require('dotenv').config({ path: '../.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const { connectRabbitMQ } = require('./rabbitmq/publisher');

const app = express();
const PORT = process.env.PORT_PRODUCT || 3002;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/app_cloud_native';

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('Product Service: Connected to MongoDB'))
  .catch(err => console.error('Product Service: MongoDB connection error:', err));

// Connect to RabbitMQ
connectRabbitMQ();

// Routes
app.use('/products', productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something broke in Product Service!' });
});

app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});
