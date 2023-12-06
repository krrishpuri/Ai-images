// import express from 'express';
// import * as dotenv from 'dotenv';
// import  OpenAIApi from 'openai';
// import Configuration from 'openai';

// dotenv.config();

// const router = express.Router();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'Hello from DALL-E!' });
// });

// export default router;

// import express from 'express';
// import dotenv from 'dotenv';
// import OpenAIApi  from 'openai';

// import Configuration from "openai";

// dotenv.config();

// const router = express.Router();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(process.env.OPENAI_API_KEY);

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'Hello from DALL-E!' });
// });

// export { router };

// import express from 'express';
// import * as dotenv from 'dotenv';
// import  OpenAIApi from 'openai';
// import Configuration from 'openai';

// dotenv.config();

// const router = express.Router();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'Hello from DALL-E!' });
// });

// router.route('/').post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const aiResponse = await openai.createImage({
//       prompt,
//       n: 1,
//       size: '1024x1024',
//       response_format: 'b64_json',
//     });

//     const image = aiResponse.data.data[0].b64_json;
//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error?.response.data.error.message || 'Something went wrong');
//   }
// });

// export {router};
// import express from 'express';
// import * as dotenv from 'dotenv';
// import  OpenAIApi  from 'openai';

// dotenv.config();

// const router = express.Router();

// const openai = new OpenAIApi({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'Hello from DALL-E!' });
// });

// router.route('/').post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const aiResponse = await openai.createImage({
//       prompt,
//       n: 1,
//       size: '1024x1024',
//       responseFormat: 'b64_json',
//     });

//     const image = aiResponse.data[0].data.b64_json;
//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error?.message || 'Something went wrong');
//   }
// });

// export { router };


import express from 'express';
import * as dotenv from 'dotenv';
import  OpenAIApi from 'openai';
import Configuration from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from ImageVerse!' });
});

// router.route('/').post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const aiResponse = await openai.createImage({
//       prompt,
//       n: 1,
//       size: '1024x1024',
//       response_format: 'b64_json',
//     });

//     const image = aiResponse.data.data[0].b64_json;
//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error?.response.data.error.message || 'Something went wrong');
//   }
// });

// router.route('/').post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const aiResponse = await openai.createImage({
//       prompt,
//       n: 1,
//       size: '1024x1024',
//       response_format: 'b64_json',
//     });

//     const image = aiResponse.data.data[0].b64_json;
//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.error(error);

//     if (error?.response?.data?.error?.message) {
//       res.status(500).send(error.response.data.error.message);
//     } else {
//       res.status(500).send('Something went wrong');
//     }
//   }
// });


router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);

    if (error?.response?.data?.error?.message) {
      res.status(500).send(error.response.data.error.message);
    } else {
      res.status(500).send('Something went wrong');
    }
  }
});


export default router;