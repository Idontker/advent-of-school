import seedrandom from 'seedrandom';

export function getSeededRandomInt(rng: seedrandom.PRNG, min = 0, max = 10) {
	return Math.floor(rng() * (max - min + 1)) + min;
}

export function getSeededRandomString(rng: seedrandom.PRNG, length = 8) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += characters[Math.floor(rng() * characters.length)];
	}
	return result;
}

export function getSeededRandomChoice(rng: seedrandom.PRNG, choices: any[]) {
	const index = Math.floor(rng() * choices.length);
	return choices[index];
}

// export default { getSeededRandomInt, getSeededRandomChoice, getSeededRandomString };
