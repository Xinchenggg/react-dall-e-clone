# react-dall-e-clone

## Intro
This is a practice of making a clone web application of DALL-E using MERN stack.

Frontend uses [vite](https://vitejs.dev/) framework and [tailwind](https://tailwindcss.com/) css styling.

Backend are connected to [MongoDB](https://www.mongodb.com/). When a image is generated, the image will be uploaded and saved to [Cloudinary](https://cloudinary.com/) and returns a url. The url is stored in MongoDB along with name and prompt.

See needed environment variables in [`/server/.env.example`](server/.env.example).

By default configuration, the application will generate `1` image in `b64_json` format, with resolution of `256x256`, the other accepted size are `512x512` and `1024x1024`. You can change it in [`/server/routes/dalleRoutes.js`](server/routes/dalleRoutes.js)

Note that each OpenAi account has $18 free trial usage, more generated image and larger size will cost more credit.

Besides, have fun!😜
