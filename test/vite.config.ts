import { defineConfig } from 'vite'
import uint8array from '../dist'

export default defineConfig({
  plugins: [uint8array()]
})
