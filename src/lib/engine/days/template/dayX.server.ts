import template from './dayX.template';
import DayDescription from './DayX.svelte';
import { AbstractDayChallenge } from '../AbstractDayChallange';
import type seedrandom from 'seedrandom';
import { getSeededRandomInt } from '$lib/srand';

class DayChallenge extends AbstractDayChallenge {
	// no need to touch
	public getDescription() {
		return DayDescription;
	}

	// no need to touch
	public getInitialCode(): string {
		return template.toString();
	}

	public publicTestCases(): Testcase[] {
		return [
			{ inputs: [1], expected: 1 },
			{ inputs: [2], expected: 2 },
			{ inputs: [3], expected: 3 }
		];
	}

	public getInitialCall(inputs: any[]): string {
		return `template(${inputs[0]})`;
	}

	public getPersonalTestcase(rng: seedrandom.PRNG): Testcase {
		const val = getSeededRandomInt(rng, 0, 10);
		return {
			inputs: [val],
			expected: this.solution([val])
		};
	}

	public solution(inputs: any[]): any {
		return inputs[0];
	}
}

const DayX = new DayChallenge();
export default DayX;
