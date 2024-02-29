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

## typescript

add support for `?uint8array` in module paths

```js
{
  "compilerOptions": {
    "types": ["vite-plugin-uint8array/types"]
  }
}
```

## hat tip

this was inspired by [my original pr to vite-plugin-arraybuffer](https://github.com/tachibana-shin/vite-plugin-arraybuffer/pull/6), so thanks for the foundation [tachibana-shin](https://github.com/tachibana-shin)!
