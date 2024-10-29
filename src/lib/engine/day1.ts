export function getRunStatement(flottengroesse: any) {
	return `benoetigteElfen(${flottengroesse})`;
}

interface Testcase {
	inputs: any[];
	expected: any;
}

export const testcases: Testcase[] = [
	// make it a list of inputs so i can
	// call the testcase with

	// testcase(...inputs)
	{ inputs: [3], expected: 2 },
	{ inputs: [8], expected: 6 },
	{ inputs: [2412], expected: 1608 }

    // return Math.ceil(2 * flottenGroesse / 3);
	// solution:
	// 1 + 2 * x // 3
];
