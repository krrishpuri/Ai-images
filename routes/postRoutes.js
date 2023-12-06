// import express from 'express';
// import * as dotenv from 'dotenv';
// import { v2 as cloudinary } from 'cloudinary';

// import Post from '../mongodb/models/post.js';

// dotenv.config();

// const router = express.Router(); // Create an instance of Express router

// // Define your routes and route handling logic using the 'router' object

// // Example route
// cloudinary.config({

//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// })

// router.route('/').get(async (req, res) => {
//   try {
//     const posts = await Post.find({});
//     res.status(200).json({ success: true, data: posts });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
//   }
// });


// // router.get('/posts', async (req, res) => {
// //   try {
// //     const posts = await Post.find(); // Example MongoDB operation using 'Post' model
// //     res.status(200).json(posts);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });

// // // Example route using cloudinary
// // router.post('/upload', async (req, res) => {
// //   try {
// //     // Your cloudinary upload logic here
// //     res.status(200).json({ message: 'File uploaded successfully' });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });
// router.route('/').post(async (req, res) => {
//   try {
//     const { name, prompt, photo } = req.body;
//     const photoUrl = await cloudinary.uploader.upload(photo);

//     const newPost = await Post.create({
//       name,
//       prompt,
//       photo: photoUrl.url,
//     });

//     res.status(200).json({ success: true, data: newPost });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
//   }
// });

// export {router}; // Export the router containing defined routes


import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

export default router;