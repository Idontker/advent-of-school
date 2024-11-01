import template from './day2.template';
import { AbstractDayChallenge } from '../AbstractDayChallange';
import type seedrandom from 'seedrandom';
import { getSeededRandomChoice } from '$lib/srand';

class DayChallenge extends AbstractDayChallenge {
	public getInitialCode(): string {
		return template.toString();
	}

	public publicTestCases(): Testcase[] {
		return [
			{ inputs: ['^v^^'], expected: 1 },
			{ inputs: ['^^^--vv--^vv'], expected: 0 },
			{ inputs: ['^^v^^'], expected: 3 }
		];
	}

	public getInitialCall(inputs: any[]): string {
		return `template(${inputs[0]})`;
	}

	public getPersonalTestcase(rng: seedrandom.PRNG): Testcase {
		const length = 420;

		let currentLevel = 0;
		let input = '';

		for (let i = 0; i < length; i++) {
			if (currentLevel == 0) {
				const next = getSeededRandomChoice(rng, ['^', '-']);
				if (next == '^') {
					currentLevel++;
				}
				input += next;
			} else {
				const next = getSeededRandomChoice(rng, ['^', '-', 'v']);
				if (next == '^') {
					currentLevel++;
				} else if (next == 'v') {
					currentLevel--;
				}
				input += next;
			}
		}
		return {
			inputs: [input],
			expected: this.solution([input])
		};
	}

	public solution(inputs: any[]): any {
		let level = 0;
		for (const character of inputs[0]) {
			if (character == 'v') {
				level--;
			} else if (character == '^') {
				level++;
			}
		}

		return level;
	}
}

const Day2 = new DayChallenge();
export default Day2;
