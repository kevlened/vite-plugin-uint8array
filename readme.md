a fast-by-default way to bundle assets as Uint8Arrays using base64

## install

```sh
npm i vite-plugin-uint8array -D
```

## usage

in `vite.config.ts`

```js
import { defineConfig } from 'vite'
import uint8array from 'vite-plugin-uint8array'

export default defineConfig({
  plugins: [uint8array()]
})
```

in your files

```js
import example from './example.png?uint8array'

// example is a Uint8Array
// example.buffer is an ArrayBuffer
```
