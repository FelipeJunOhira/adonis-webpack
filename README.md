# Adonis Webpack

> Add-on to setup Webpack integration with your AdonisJs application.

## Setup

Start by installing it with adonis installer.

```bash
adonis install adonis-webpack

# yarn
adonis install adonis-webpack --yarn
```

## Register provider
Register the provider inside `start/app.js` file.

```js
const providers = [
  'adonis-webpack/providers/WebpackProvider'
]
```

That's all :)

## Config

By default, after the installing a `config/webpack.js` is going to be created.

If there are any configuration to change or webpack plugin you need to install, just go there and change it.
