// import mongoose from 'mongoose';

// const connectDB = async (url) => {
//   try {
//     if (!url || typeof url !== 'string') {
//       throw new Error('Invalid MongoDB URI');
//     }

//     await mongoose.connect(url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Failed to connect to MongoDB');
//     console.error(error);
//   }
// };

// export { connectDB };



import mongoose from 'mongoose';

const connectDB = async (url) => {
  try {
    if (!url || typeof url !== 'string') {
      throw new Error('Invalid MongoDB URI');
    }

    await mongoose.connect(url);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB');
    console.error(error);
  }
};

export { connectDB };

