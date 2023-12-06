// import express from 'express';
// import dotenv from 'dotenv';
// import { connectDB } from './mongodb/connect.js'; // Updated to use named export

// import { router as postRoutes } from './routes/postRoutes.js'; // Import the named export as router
// import { router as dalleRoutes } from './routes/dalleRoutes.js'; // Updated to use named exportinclude the file extension and import the named export as router

// dotenv.config();

// const app = express();
// app.use(express.json({ limit: '50mb' }));

// app.use('/api/v1/post', postRoutes);
// app.use('/api/v1/dalle', dalleRoutes);

// app.get('/', async (req, res) => {
//   res.status(200).json({
//     message: 'Hello from ImageVerse!',
//   });
// });

// const startServer = async () => {
//   try {
//     await connectDB(process.env.MONGODB_URL);
//     app.listen(8080, () => console.log('Server started on port 8080 http://localhost:8080'));
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();


// import express from 'express';
// import dotenv from 'dotenv';
// import { connectDB } from './mongodb/connect.js';
// import cors from 'cors'; // Import the CORS middleware

// // import { router as postRoutes } from './routes/postRoutes.js';
// // import { router as dalleRoutes } from './routes/dalleRoutes.js';


// import postRoutes from './routes/postRoutes.js';
// import dalleRoutes from './routes/dalleRoutes.js';
// dotenv.config();

// const app = express();
// app.use(express.json({ limit: '50mb' }));

// // Use CORS middleware
// app.use(cors()); // This will allow all origins. Adjust options if needed for specific origins.

// app.use('/api/v1/post', postRoutes);
// app.use('/api/v1/dalle', dalleRoutes);

// app.get('/', async (req, res) => {
//   res.status(200).json({
//     message: 'Hello from ImageVerse!',
//   });
// });

// const startServer = async () => {
//   try {
//     await connectDB(process.env.MONGODB_URL);
//     app.listen(8080, () => console.log('Server started on port 8080 http://localhost:8080'));
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();



import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import {connectDB}from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();