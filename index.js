require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const dbConfig = require('./configs/dbConfig');
const commonRouter = require('./routes/mainRoute');



const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});


// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect(dbConfig.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes (to be added)
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/user', require('./routes/userRoutes'));
// app.use('/api/admin', require('./routes/adminRoutes'));
// app.use('/api/game', require('./routes/gameRoutes'));
// app.use('/api/wallet', require('./routes/walletRoutes'));

app.use("/", commonRouter);

const PORT = process.env.PORT ;
console.log("PORT",PORT)
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server, io };
