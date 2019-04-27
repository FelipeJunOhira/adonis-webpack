## Register provider

Register the provider inside `start/app.js` file.

```js
const providers = [
  'adonis-webpack/providers/WebpackProvider'
]
```

That's all :)

## Optional Config

If you want to use Webpack Dev Middleware with AdonisJs, just add the environment variable to your `.env` file:

```
ENABLE_WEBPACK_DEV_MIDDLEWARE=true
```
