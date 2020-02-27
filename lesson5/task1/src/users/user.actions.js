export const INCREMENT = 'PAGE/INCREMENT';
export const DECREMENT = 'PAGE/DECREMENT';

export function increment() {
	return {
		type: INCREMENT
	};
}

export function decrement() {
	return {
		type: DECREMENT
	};
}
