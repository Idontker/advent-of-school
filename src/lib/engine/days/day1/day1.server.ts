import seedrandom from 'seedrandom';
import benoetigteElfen from './day1.template';
import { getSeededRandomInt } from '$lib/srand';
import { AbstractDayChallenge } from '$lib/engine/days/AbstractDayChallange';
import Day1Description from './Day1.svelte';

class DayChallenge extends AbstractDayChallenge {
	public getDescription() {
		return Day1Description;
	}

	public publicTestCases(): Testcase[] {
		return [
			{ inputs: [3], expected: 2 },
			{ inputs: [3], expected: 2 },
			{ inputs: [3], expected: 2 }
		];
	}

	public getInitialCode(): string {
		return benoetigteElfen.toString();
	}

	public getInitialCall(inputs: any[]): string {
		return `benoetigteElfen(${inputs[0]})`;
	}

	public getPersonalTestcase(rng: seedrandom.PRNG): Testcase {
		const val = 1 + getSeededRandomInt(rng, 1000, 9999);
		return {
			inputs: [val],
			expected: this.solution([val])
		};
	}

	public solution(inputs: any[]): any {
		return Math.ceil((2 * inputs[0]) / 3);
	}
}

const Day1 = new DayChallenge();
export default Day1;
