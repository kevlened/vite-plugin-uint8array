import type { PluginOption } from 'vite'
import fs from 'fs/promises'

export default function uint8array(): PluginOption {
	return {
		name: 'vite-plugin-uint8array',
		resolveId(id) {
			if (id === 'virtual:decodeb64') return id
		},
		load(id) {
			if (id === 'virtual:decodeb64') return `
				export default function decodeb64(b64) {
					if (typeof Buffer !== 'undefined') {
						return new Uint8Array(Buffer.from(b64, 'base64'))
					}
					const bin = atob(b64)
					const len = bin.length
					const bytes = new Uint8Array(len)
					for (let i = 0; i < len; i++) {
						bytes[i] = bin.charCodeAt(i)
					}
					return bytes
				}
			`
		},
		async transform(_, id) {
			if (id.endsWith('?uint8array')) {
				const file = id.slice(0, -11)
				this.addWatchFile(file)
				const buffer = await fs.readFile(file)
				return `
					import decodeb64 from 'virtual:decodeb64'
					export default decodeb64('${buffer.toString('base64')}')
				`
			}
		},
	}
}
