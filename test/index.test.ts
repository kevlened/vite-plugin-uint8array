import uint8array from './example.png?uint8array'
import crypto from 'crypto'

import { expect, test } from 'vitest'

const hash = (buffer: ArrayBuffer) => crypto.createHash('md5').update(Buffer.from(buffer)).digest('hex')

test('?uint8array', () => {
	expect(uint8array instanceof Uint8Array).toBe(true)
	expect(hash(uint8array.buffer)).toEqual('db09a7d3b5bb6df3e2c330c00e2c4e2f')
})
