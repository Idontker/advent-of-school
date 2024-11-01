import seedrandom from 'seedrandom';

export abstract class AbstractDayChallenge {
	abstract publicTestCases(): Testcase[];
	abstract getInitialCode(): string;
	abstract getInitialCall(inputs: any[]): string;
	abstract getPersonalTestcase(rng: seedrandom.PRNG): Testcase;
	abstract solution(inputs: any[]): any;
}
