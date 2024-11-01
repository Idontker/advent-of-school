import Day1 from './day1/day1.server';
import Day2 from './day2/day2.server';
import DayX from './template/dayX.server';

export function days(day: number) {
	if (day == 1) return Day1;
	if (day == 2) return Day2;

	return DayX;
}
