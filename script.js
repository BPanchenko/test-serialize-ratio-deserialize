import assert from 'node:assert'
import test from 'node:test'

function createArray(length, range = [1, 1000], repeat = 1) {
	const [min, max] = range
	const result = Array.from({ length })
	for(let i = 0; i < length;) {
		const value = min + Math.round(Math.random() * (max - min))
		result.fill(value, i, (i += repeat))
	}
	return result
}

const serialize = arr => {
	const clon = arr.slice(0).sort((a, b) => a - b)
	const receiver = []
	do {
		const last = receiver.at(-1)
		const item = clon.pop()
		if (undefined === last || last[0] !== item) {
			receiver.push([item, 1])
		} else {
			last[1] += 1
		}
	} while(clon.length)
	return receiver.map(c => c[1] === 1 ? c[0] : c.join(',')).join(';')
}

const deserialize = row => row.split(';').map(r => {
	const [ item, length = 1 ] = r.split(',')
	return Array.from({ length }).fill(parseInt(item))
}).flat()

test('#1', () => {
	const input = createArray(50);
	const a = input.toString();
	const b = serialize(input);
	const ratio = (a.length / b.length).toPrecision(2)

	const actual = input.sort((a, b) => b - a)
	const expected = deserialize(b)

	console.log('Compression Ratio = ' + ratio)
	assert.equal(actual.length, expected.length)
	for (let idx = 0; idx < actual.length; idx++) assert.equal(actual[idx], expected[idx])
})

test('#1', () => {
	const input = createArray(100);
	const a = input.toString();
	const b = serialize(input);
	const ratio = (a.length / b.length).toPrecision(2)

	const actual = input.sort((a, b) => b - a)
	const expected = deserialize(b)

	console.log('Compression Ratio = ' + ratio)
	assert.equal(actual.length, expected.length)
	for (let idx = 0; idx < actual.length; idx++) assert.equal(actual[idx], expected[idx])
})

test('#2', () => {
	const input = createArray(500);
	const a = input.toString();
	const b = serialize(input);
	const ratio = (a.length / b.length).toPrecision(2)

	const actual = input.sort((a, b) => b - a)
	const expected = deserialize(b)

	console.log('Compression Ratio = ' + ratio)
	assert.equal(actual.length, expected.length)
	for (let idx = 0; idx < actual.length; idx++) assert.equal(actual[idx], expected[idx])
})

test('#3', () => {
	const input = createArray(1000);
	const a = input.toString();
	const b = serialize(input);
	const ratio = (a.length / b.length).toPrecision(2)

	const actual = input.sort((a, b) => b - a)
	const expected = deserialize(b)

	console.log('Compression Ratio = ' + ratio)
	assert.equal(actual.length, expected.length)
	for (let idx = 0; idx < actual.length; idx++) assert.equal(actual[idx], expected[idx])
})

test('#4', () => {
	const input = createArray(1000, [0, 9]);
	const a = input.toString();
	const b = serialize(input);
	const ratio = (a.length / b.length).toPrecision(2)

	const actual = input.sort((a, b) => b - a)
	const expected = deserialize(b)

	console.log('Compression Ratio = ' + ratio)
	assert.equal(actual.length, expected.length)
	for (let idx = 0; idx < actual.length; idx++) assert.equal(actual[idx], expected[idx])
})

test('#5', () => {
	const input = createArray(1000, [10, 99]);
	const a = input.toString();
	const b = serialize(input);
	const ratio = (a.length / b.length).toPrecision(2)

	const actual = input.sort((a, b) => b - a)
	const expected = deserialize(b)

	console.log('Compression Ratio = ' + ratio)
	assert.equal(actual.length, expected.length)
	for (let idx = 0; idx < actual.length; idx++) assert.equal(actual[idx], expected[idx])
})

test('#6', () => {
	const input = createArray(1000, [100, 999]);
	const a = input.toString();
	const b = serialize(input);
	const ratio = (a.length / b.length).toPrecision(2)

	const actual = input.sort((a, b) => b - a)
	const expected = deserialize(b)

	console.log('Compression Ratio = ' + ratio)
	assert.equal(actual.length, expected.length)
	for (let idx = 0; idx < actual.length; idx++) assert.equal(actual[idx], expected[idx])
})

test('#7', () => {
	const input = createArray(900, [1, 1000], 3);
	const a = input.toString();
	const b = serialize(input);
	const ratio = (a.length / b.length).toPrecision(2)

	const actual = input.sort((a, b) => b - a)
	const expected = deserialize(b)

	console.log('Compression Ratio = ' + ratio)
	assert.equal(actual.length, expected.length)
	for (let idx = 0; idx < actual.length; idx++) assert.equal(actual[idx], expected[idx])
})